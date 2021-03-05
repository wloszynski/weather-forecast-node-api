const express = require("express");
const router = new express.Router();

const getWeatherData = require("../utils/weather/weatherForecast");
const getAirQualityData = require("../utils/weather/airQuality");

router.get("/weather/", async (req, res) => {
  const lat = 54;
  const lng = 18;
  const [airQuality, weatherData] = await Promise.all([
    await getAirQualityData(lat, lng).then((quality) => quality),
    await getWeatherData(lat, lng),
  ]);

  res.send([airQuality, weatherData]);
});

module.exports = router;
