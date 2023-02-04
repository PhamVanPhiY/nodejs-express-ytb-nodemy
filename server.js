var express = require("express");
var app = express();
var route1 = require("./apiRoute.js");

// route1.get("/nancy", (req, res, next) => {
//   res.json("nancy 1 ");
// });
// route1.get("/momoland", (req, res, next) => {
//   res.json("momoland");
// });
var a = "";
var check = (req, res, next) => {
  if (req.params.id == 1) {
    a = "admin";
    next();
  } else {
    a = "user";
    next();
  }
};

var hello = (req, res, next) => {
  res.json(req.params.id + "Hello  moi nguoi" + req.params.stt);
};

app.get("/:id", check, hello);
app.get("/:id/:stt/", check, hello);

// app.use("/api/", route1);

app.listen(3000, () => {
  console.log("Hello ae ");
});
