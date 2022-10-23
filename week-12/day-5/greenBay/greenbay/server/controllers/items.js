const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getItems = async (req, res) => {
  try {
    const items = await prisma.item.findMany();
    res.status(200).json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const buyItem = async (req, res) => {
  const itemId = req.params.id;
  const buyerId = req.userId;

  let isValid = true;
  let message = {
    buyItemErrors: "",
  };

  try {
    const item = await prisma.item.findUnique({
      where: {
        id: itemId,
      },
    });
    if (!item) {
      console.log(item, "ite 30");
      isValid = false;
      message.buyItemErrors += "Item is not fount. ";
    } else {
      if (item.buyer_id) {
        isValid = false;
        message.buyItemErrors += "Item can't be bought. ";
      }
    }
    const buyer = await prisma.user.findUnique({
      where: {
        id: buyerId,
      },
    });

    if (buyer.cash < item.price) {
      isValid = false;
      message.buyItemErrors += "Come back when u have enough $$$. ";
    }

    if (buyer.id === item.owner_id) {
      isValid = false;
      message.buyItemErrors +=
        "OMG u can't buy your own item STOP DRINKING SO MUCH. ";
    }

    if (!isValid) {
      res.status(400).json(message);
      return;
    }

    //Paying for item
    await prisma.user.update({
      where: {
        id: buyerId,
      },
      data: {
        cash: (buyer.cash -= item.price),
      },
    });

    //Setting buyers id to item
    await prisma.item.update({
      where: {
        id: itemId,
      },
      data: {
        buyer_id: buyerId,
      },
    });

    return res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const addItem = async (req, res) => {
  let isValid = true;
  let message = {
    addItemNameError: "",
    addItemDescriptionError: "",
    addItemImageUrlError: "",
    addItemPriceError: "",
  };

  if (!req.body.name.trim()) {
    message.addItemNameError += "The item name field is required.\n";
    isValid = false;
  }

  if (!req.body.description.trim()) {
    message.addItemDescriptionError += "The description field is required.\n";
    isValid = false;
  }

  if (!req.body.img_url.trim()) {
    message.addItemImageUrlError += "The image url field is required.\n";
    isValid = false;
  }

  if (
    !/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/.test(
      req.body.img_url.trim()
    )
  ) {
    message.addItemImageUrlError += "The image url is not valid.\n";
    isValid = false;
  }

  if (!req.body.price) {
    message.addItemPriceError += "The price field is required.\n";
    isValid = false;
  }

  if (
    parseInt(req.body.price) < 0 ||
    parseInt(req.body.price).isNaN ||
    !Number.isInteger(parseInt(req.body.price))
  ) {
    message.addItemPriceError += "The number must be positive whole number!\n";
    isValid = false;
  }

  if (!isValid) {
    res.status(400).json(message);
    return;
  }

  const data = {
    owner_id: req.userId,
    name: req.body.name.trim(),
    description: req.body.description.trim(),
    img_url: req.body.img_url.trim(),
    price: parseFloat(req.body.price),
  };

  try {
    const newItemData = await prisma.item.create({
      data,
    });
    console.log(newItemData);
    res.status(200).json(newItemData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

// update a restaurant by id
const updateRestaurant = async (req, res) => {
  // try {
  //   await uploadRestaurant(req, res);
  // } catch (err) {
  //   res.status(400).json({ message: err.message });
  //   return;
  // }

  let isValid = true;
  let message = "";

  if (!req.body.name.trim()) {
    message += "The Restaurant name field is required. ";
    isValid = false;
  }

  if (!req.body.address.trim()) {
    message += "The address field is required. ";
    isValid = false;
  }

  if (!req.body.email.trim()) {
    message += "The email field is required. ";
    isValid = false;
  }

  if (!req.body.phone_number.trim()) {
    message += "The phone number field is required. ";
    isValid = false;
  }

  if (!req.body.delivery_fee.trim()) {
    message += "The delivery fee field is required. ";
    isValid = false;
  }

  if (isNaN(req.body.delivery_fee.trim())) {
    message += "The delivery fee must be number. ";
    isValid = false;
  }

  if (!isValid) {
    res.status(400).json({ message });
    return;
  }
  try {
    const restaurant = await prisma.restaurant.findUnique({
      where: {
        id: req.params.id,
      },
    });
    if (restaurant) {
      // Have to use updateMany bc update does not support multiple where conditions.
      const updatedRestaurantData = await prisma.restaurant.updateMany({
        where: {
          id: req.params.id,
          owner_id: parseInt(req.userId),
        },
        data: {
          name: req.body.name,
          description: req.body.description,
          address: req.body.address,
          email: req.body.email,
          phone_number: req.body.phone_number,
          delivery_fee: parseFloat(req.body.delivery_fee),
          img_url:
            Math.floor(Date.now() / 10000) +
            req.file.originalname.replace(/\s/g, "_"),
          owner_id: req.userId,
        },
      });
      res.send(updatedRestaurantData);
    } else {
      res.status(404).json({ message: "Restaurant not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

// get a restaurant by id
const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await prisma.restaurant.findUnique({
      where: {
        id: req.params.id,
      },
    });
    if (restaurant) {
      res.send(restaurant);
    } else {
      res.status(404).json({ message: "Restaurant not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

const deleteRestaurantById = async (req, res) => {
  try {
    const existenceOfForeignKeys = await prisma.meals.findFirst({
      where: {
        restaurant_id: req.params.id,
      },
    });
    if (existenceOfForeignKeys) {
      res
        .status(400)
        .json({ message: "Restaurant have meals and cannot be removed" });
      return;
    }
    const verifyExistence = await prisma.restaurant.findUnique({
      where: {
        id: req.params.id,
      },
    });
    if (!verifyExistence) {
      res.status(404).json({ message: "Restaurant not Found" });
      return;
    }

    // Have to use deleteMany bc delete does not support multiple where conditions.
    const removedRestaurant = await prisma.restaurant.deleteMany({
      where: {
        id: req.params.id,
        owner_id: parseInt(req.userId),
      },
    });
    if (removedRestaurant.count === 1)
      res.status(200).json({ message: "Restaurant deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

// export the functions
module.exports = {
  getItems,
  addItem,
  buyItem,
  updateRestaurant,
  getRestaurantById,
  deleteRestaurantById,
};
