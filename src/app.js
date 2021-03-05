const express = require("express");
const citiesRouter = require("./routers/cities");
const weatherRouter = require("./routers/weather");
const randomImageRouter = require("./routers/randomImage");

const app = express();

app.use(express.json());
app.use(citiesRouter);
app.use(weatherRouter);
app.use(randomImageRouter);

module.exports = app;
