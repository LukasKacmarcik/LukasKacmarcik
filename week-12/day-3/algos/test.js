// fetch(`https://swapi.dev/api/people/1`, {
//  method: post,
//   headers: {
//     "content-type": "application/json",
//   },
//   body: JSON.stringify(object),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))

//   .catch((err) => console.log(err));
const axios = require("axios");
(async () => {
  try {
    const response = await axios(`https://swapi.dev/api/people/1`);
    if (response.statusText === "OK") {
      console.log(response.status);
    }
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
})();
