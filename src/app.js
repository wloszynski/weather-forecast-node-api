const express = require("express");
const cors = require("cors");
const citiesRouter = require("./routers/cities");
const weatherRouter = require("./routers/weather");
const randomImageRouter = require("./routers/randomImage");

const app = express();

app.use(cors());
app.use(express.json());
app.use(citiesRouter);
app.use(weatherRouter);
app.use(randomImageRouter);

module.exports = app;
