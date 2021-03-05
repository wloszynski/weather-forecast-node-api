const express = require("express");
const router = new express.Router();

const getWeatherData = require("../utils/weather/weatherForecast");
const getAirQualityData = require("../utils/weather/airQuality");
const getCoordsFromCityName = require("../utils/cities/getCityCoords");

router.get("/weather/coords/lat=:lat&lng=:lng", async (req, res) => {
  const lat = req.params.lat;
  const lng = req.params.lng;
  console.log(req.params);
  const [airQuality, weatherData] = await Promise.all([
    await getAirQualityData(lat, lng).then((quality) => quality),
    await getWeatherData(lat, lng),
  ]);
  if (!airQuality && !weatherData) {
    res.sendStatus(404);
  }
  res.status(200).send([airQuality, weatherData]);
});

router.get("/weather/name/:name", async (req, res) => {
  const name = req.params.name;

  const [lat, lng] = await getCoordsFromCityName(name);
  const [airQuality, weatherData] = await Promise.all([
    await getAirQualityData(lat, lng).then((quality) => quality),
    await getWeatherData(lat, lng),
  ]);

  if (!airQuality && !weatherData) {
    res.sendStatus(404);
  }
  res.status(200).send([airQuality, weatherData]);
});

module.exports = router;
