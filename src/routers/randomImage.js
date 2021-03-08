const express = require("express");
const fetch = require("node-fetch");
const router = new express.Router();

router.get("/randomImageUrl", async (req, res) => {
  const randomImageUrl = await fetch(
    "https://source.unsplash.com/random/1920x1080?city,village"
  )
    .then((result) => {
      return result.url;
    })
    .catch((err) => {
      console.log(err);
    });
  res.json({ url: randomImageUrl });
});

module.exports = router;
