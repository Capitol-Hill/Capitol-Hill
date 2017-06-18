var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {
  res.render("index");
});

// router.post("/results", function(req, res) {
//   console.log("address: " + req.body.search);
//   res.redirect("back");
// });

// router.post("/")

module.exports = router;
