const express = require("express");
const router = new express.Router();

router.get("/cities", async (req, res) => {
  res.status(201).send("hello");
});

module.exports = router;
