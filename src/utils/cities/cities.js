const path = require("path");

const cities = require(path.join(
  __dirname,
  "../../../assets/world-cities-filtered.json"
));

module.exports = { cities };
