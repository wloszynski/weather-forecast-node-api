const fetch = require("node-fetch");

// Get coords from given city name
const getCoordsFromCityName = async function (cityName) {
  return await fetch(
    `${process.env.LIQ_API_URL}/search.php?key=${process.env.LIQ_API_KEY}&format=json&q=${cityName}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        alert("Could not find given city, try again.");
        throw new Error("Could not find given city");
      }
      return [data[0].lat, data[0].lon];
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = getCoordsFromCityName;
