const express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
  res.json("router 1 user");
});

router.get("/:id", (req, res) => {
  res.send("Id user " + req.params.id);
});
router.get("/nancy", (req, res) => {
  res.json("nancy 1 ");
});
router.get("/momoland", (req, res) => {
  res.json("momoland");
});

module.exports = router;
