const fetch = require("node-fetch");

const drawRandomImage = async function () {
  const randomImage = await fetch(
    "https://source.unsplash.com/random/1920x1080?city,village"
  );
  return randomImage.url;
};

module.exports = drawRandomImage;
