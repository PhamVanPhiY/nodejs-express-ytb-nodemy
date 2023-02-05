const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const AccountModel = require("../models/account");

// get : lấy dữ liệu từ database
router.get("/", (req, res, next) => {
  AccountModel.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json("Loi tu server");
    });
});

// post : thêm dữ liệu vào trong db
router.post("/", (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;

  AccountModel.create({
    username: username,
    password: password,
  })
    .then((data) => {
      res.json("Thêm thành công !");
    })
    .catch((err) => {
      res.json("Thất bại");
    });
});

// put : update dữ liệu trong db
router.put("/:id", (req, res, next) => {
  var id = req.params.id;
  var newPassword = req.body.newPassword;

  AccountModel.findByIdAndUpdate(id, {
    password: newPassword,
  })
    .then((data) => {
      res.json("Cap nhat thanh cong");
    })
    .catch((err) => {
      res.status(500).json("Lỗi server ");
    });
});

// delete : xóa dữ liệu trong db
router.delete("/:id", (req, res, next) => {
  var id = req.params.id;
  AccountModel.deleteOne({
    _id: id,
  })
    .then((data) => {
      res.json("Xóa thành công");
    })
    .catch((err) => {
      res.status(500).json("Lỗi server");
    });
});

// Nếu muốn lấy 1 phần tử thôi
router.get("/:id", (req, res, next) => {
  var id = req.params.id;
  AccountModel.findById(id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json("Lỗi server");
    });
});

module.exports = router;
