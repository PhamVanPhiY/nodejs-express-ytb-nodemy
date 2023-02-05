const express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
  res.json("router 1 user");
});
router.post("/", (req, res) => {
  console.log(req.headers.nameData);
  res.json("router 1 user post " + req.body.passsword);
});
router.put("/", (req, res) => {
  res.json("router 1 user put");
});
router.delete("/", (req, res) => {
  res.json("router 1 user delete");
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
