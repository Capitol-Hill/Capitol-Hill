var express = require("express");
var path = require("path");

var apiRoutes = require("./apiRoutes");

var router = new express.Router();

// Use the apiRoutes module for any routes starting with "/api"
router.use("/api", apiRoutes);

// Otherwise send all other requests the index.html page
// React router will handle routing withing the app
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// router.post("/results", function(req, res) {
//   var first = req.body.first;
//   var last = req.body.last;
//   db.Senators.find({first_name: first, last_name: last }, function(error, senator) {
//     if (error) { console.log(error)}
//      var hbsObj = senator;
//      res.json(senator);
//   });
// });

module.exports = router;
