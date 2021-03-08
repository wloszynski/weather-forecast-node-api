const express = require("express");
const router = new express.Router();

const cities = require("../utils/cities/cities");

router.get("/cities", async (req, res) => {
  res.send(JSON.stringify(cities));
});

module.exports = router;
