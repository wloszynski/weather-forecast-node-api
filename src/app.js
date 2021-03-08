const express = require("express");
const cors = require("cors");
const citiesRouter = require("./routers/cities");
const weatherRouter = require("./routers/weather");

const app = express();

app.use(cors());
app.use(express.json());
app.use(citiesRouter);
app.use(weatherRouter);

module.exports = app;
