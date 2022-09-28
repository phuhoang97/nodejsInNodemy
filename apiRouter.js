const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json("router 1 user");
});

router.get("/product", (req, res) => {
  res.json("product");
});

router.get("/cart", (req, res) => {
  res.json("cart");
});

router.get("/index.html", (req, res) => {
  res.json(`./index.html`);
});

router.get("/:id", (req, res) => {
  res.json("router 1 user" + req.params.id);
});
module.exports = router;
