var express = require("express");
var path = require("path");

var apiRoutes = require("./apiRoutes");
var userRoutes = require("./userRoutes");

var router = new express.Router();

// Use the apiRoutes module for any routes starting with "/api"
router.use("/api", apiRoutes);
router.use("/user", userRoutes);

// Otherwise send all other requests the index.html page
// React router will handle routing withing the app
router.get("*", function(req, res) {

  // Cookies that have not been signed
  console.log('Cookies: ', req.cookies)

  // Cookies that have been signed
  console.log('Signed Cookies: ', req.signedCookies)
}

  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
