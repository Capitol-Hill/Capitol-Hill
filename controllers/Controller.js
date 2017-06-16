var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {
  res.render("index");
});

router.post("/results", function(req, res) {
  console.log("address: " + req.body.search);
  // res.render("results");
});

module.exports = router;
