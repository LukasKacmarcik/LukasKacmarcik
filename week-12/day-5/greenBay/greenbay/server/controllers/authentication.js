const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { isValidEmail, isLongEnough, areEnglishChars } = require("../functions");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET);
};

const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const getCurrentUser = async (req, res) => {
  if (req.userId === null) {
    return res.status(200).json({ userId: null, role: "notLoggedIn" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.userId,
      },
    });

    if (user == null) {
      return res.status(400).json({ message: "cannot find user" });
    }

    res
      .status(200)
      .json({ userId: user.user_id, role: user.role, username: user.username });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const postSignup = async (req, res) => {
  let isValid = true;
  const message = {
    usernameError: "",
    passwordError: "",
  };

  if (!req.body.username.trim()) {
    message.usernameError += "The  username field is required. \n";
    isValid = false;
  } else {
    const userExists = await prisma.user.count({
      where: {
        username: req.body.username,
      },
    });
    if (userExists !== 0) {
      message.usernameError +=
        "This username already exists, please choose a different username. \n";
      isValid = false;
    }
  }

  if (!areEnglishChars(req.body.username.trim())) {
    message.usernameError += "Please use english alphabet letters only. \n";
    isValid = false;
  }

  if (!req.body.password.trim()) {
    message.passwordError += "The password field is required. \n";
    isValid = false;
  }

  if (req.body.password && !isLongEnough(req.body.password)) {
    message.passwordError +=
      "The password must be minimum 6 characters long. \n";
    isValid = false;
  }

  if (!isValid) {
    res.status(400).json(message);
    return;
  }

  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const data = {
      username: req.body.username,
      password: hashedPassword,
    };
    const user = await prisma.user.create({ data });

    const accessToken = createToken(user.id);

    res.status(201).json({ accessToken: accessToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const postLogin = async (req, res) => {
  console.log("postLogin", req.body);

  let isValid = true;
  const message = [];

  if (!req.body.emailAddress.trim()) {
    message.push("The email address field is required. ");
    isValid = false;
  }

  if (
    req.body.emailAddress.trim() &&
    !isValidEmail(req.body.emailAddress.trim())
  ) {
    message.push("The email address is not valid. ");
    isValid = false;
  }

  if (!req.body.password.trim()) {
    message.push("The password field is required. ");
    isValid = false;
  }

  if (req.body.password && !isLongEnough(req.body.password)) {
    message.push("The password must be minimum 6 characters long. ");
    isValid = false;
  }

  if (!isValid) {
    res.status(400).json({ message });
    return;
  }

  const user = await prisma.user.findUnique({
    where: {
      email_address: req.body.emailAddress,
    },
  });
  if (user == null) {
    message.push("Cannot find user with the given email. ");
    return res.status(400).json({ message });
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const accessToken = createToken(user.user_id);
      res.status(201).json({ accessToken: accessToken });
    } else {
      message.push("Incorrect password, not allowed in. ");
      res.status(405).json({ message });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getUsers,
  postSignup,
  postLogin,
  getCurrentUser,
};
