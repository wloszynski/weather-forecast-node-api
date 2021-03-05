const express = require("express");
const router = new express.Router();

router.get("/weather/:city", async (req, res) => {
  res.status(201).send(req.params.city);
});

module.exports = router;
