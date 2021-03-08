const fetch = require("node-fetch");

// Getting location using lat and lng -> Wroclaw, Poland
const getCityNameFromCoords = async function (lat, lng) {
  return await fetch(
    `${process.env.LIQ_API_URL}/reverse.php?key=${process.env.LIQ_API_KEY}&lat=${lat}&lon=${lng}&format=json`
  )
    .then((response) => response.json())
    .then((data) => {
      const country = data.address.country || "";
      const city = data.address.city || data.address.county || "";

      if (city) {
        return `${city}, ${country}`;
      }

      return `${country}`;
    })
    .catch((err) => console.error(err));
};

module.exports = getCityNameFromCoords;
