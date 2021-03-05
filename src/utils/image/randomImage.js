const fetch = require("node-fetch");

const drawRandomImage = async function () {
  const data = await fetch(
    "https://source.unsplash.com/random/1920x1080?city,village"
  );
  return data.url;
};

module.exports = drawRandomImage;
