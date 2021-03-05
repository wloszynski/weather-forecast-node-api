const express = require("express");
const citiesRouter = require("./routers/cities");
const weatherRouter = require("./routers/weather");

const app = express();

app.use(express.json());
app.use(citiesRouter);
app.use(weatherRouter);

module.exports = app;
