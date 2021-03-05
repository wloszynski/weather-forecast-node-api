const express = require("express");
const router = new express.Router();

const drawRandomImage = require("../utils/image/randomImage.js");

router.get("/randomImage", async (req, res) => {
  const randomImageUrl = await drawRandomImage();
  res.send(randomImageUrl);
});

module.exports = router;
