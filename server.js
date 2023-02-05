var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var accountRouter = require("./routes/account");

const AccountModel = require("./models/account");
const mongoose = require("mongoose");

// var route1 = require("./apiRoute.js");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.json("trang chu ");
});

// register
app.post("/register", (req, res, next) => {
  // If you want to read the data (body) ,  you must have body-parser
  var username = req.body.username;
  var password = req.body.password;

  AccountModel.findOne({
    username: username,
  })
    .then((data) => {
      if (data) {
        res.json("tai khoan nay da ton tai trong db");
      } else {
        return AccountModel.create({
          username: username,
          password: password,
        });
      }
    })
    // then (data )  ở đây thích là từ else return trả về .
    .then((data) => {
      res.json("tao tai khoan thah cong ");
    })
    .catch((err) => {
      res.status(500).json("tao tai khoan that bai");
    });
});

// login

app.post("/login", (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;

  AccountModel.findOne({
    username: username,
    password: password,
  })
    .then((data) => {
      if (data) {
        res.json("Dang nhap thanh cong");
      } else {
        res.json("Dang nhap that bai");
      }
    })
    .catch((err) => {
      res.status(500).json("Co loi phia server");
    });
});

app.use("/api/account/", accountRouter);

app.listen(3000, () => {
  console.log("Hello ae ");
});
