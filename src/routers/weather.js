const express = require("express");
const router = new express.Router();

const getWeatherData = require("../utils/weather/weatherForecast");
const getAirQualityData = require("../utils/weather/airQuality");
const getCoordsFromCityName = require("../utils/cities/getCityCoords");
const getCityNameFromCoords = require("../utils/cities/getCityName");

router.get("/weather/coords/lat=:lat&lng=:lng", async (req, res) => {
  const lat = req.params.lat;
  const lng = req.params.lng;
  console.log(req.params);
  const [location, airQuality, weatherData] = await Promise.all([
    await getCityNameFromCoords(lat, lng),
    await getAirQualityData(lat, lng).then((quality) => quality),
    await getWeatherData(lat, lng),
  ]);
  if (!airQuality && !weatherData && !location) {
    res.sendStatus(404);
  }
  res.status(200).send({ location, airQuality, weatherData });
});

router.get("/weather/name/:name", async (req, res) => {
  const name = req.params.name;

  const { lat, lng } = await getCoordsFromCityName(name);
  const [location, airQuality, weatherData] = await Promise.all([
    await getCityNameFromCoords(lat, lng),
    await getAirQualityData(lat, lng).then((quality) => quality),
    await getWeatherData(lat, lng),
  ]);

  if (!airQuality && !weatherData && !location) {
    res.sendStatus(404);
  }
  res.status(200).send({ location, airQuality, weatherData });
});

module.exports = router;
