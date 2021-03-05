const fetch = require("node-fetch");

// Get weather data for given lat and lng
const getWeatherData = async function (lat, lng) {
  return await fetch(
    `${process.env.OWM_API_URL}/onecall?lat=${lat}&lon=${lng}&appid=${process.env.OWM_API_KEY}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      const { dt, temp, clouds, feels_like, sunset, humidity } = data.current;
      return { dt, temp, clouds, feels_like, sunset, humidity };
    })
    .catch((err) => console.error(err));
};

module.exports = getWeatherData;
