const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = mongoose.model("[Product]");

router.get("/", (req, res) => {
  res.router("products/addOrEdit", {
    viewTitle: "Insert Product",
  });
});
router.post("/", (req, res) => {
  addRecord(req, res);
});
function addRecord(req, res) {
  let product = new Product()
     title = req.body.title;
        category = req.body.category;
        description = req.body.description;
        img = req.body.image;
        price = req.body.price;
  user.save((err, doc) => {
    if (error) res.redirect("products/list");
    else {
      console.log("Error during record insertion");
    }
  });
}

router.get("/list", (req, res) => {
  res.json("from list");
});
module.exports = router;
