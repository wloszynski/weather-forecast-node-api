const fetch = require("node-fetch");

const airQuality = new Map([
  [1, "Good"],
  [2, "Fair"],
  [3, "Moderate"],
  [4, "Poor"],
  [5, "Very Poor"],
]);

// Fetching Air Quality from OWM Air Pollution API
// Returns Good / Fair / Moderate / Poor / Very Poor
const getAirQualityData = async function (lat, lng) {
  return await fetch(
    `${process.env.OWM_API_URL}/air_pollution?lat=${lat}&lon=${lng}&appid=${process.env.OWM_API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => data.list[0].main.aqi)
    .then((quality) => {
      return { airQuality: airQuality.get(quality) };
    })
    .catch((err) => console.error(err));
};

module.exports = getAirQualityData;
