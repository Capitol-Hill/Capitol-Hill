var express = require("express");
var passport = require("passport");
var userController = require("../controllers/userController");

var router = new express.Router();

// ALL THESE ROUTES ~/user/... from routes/routes.js
// normal routes ===============================================================

// PROFILE SECTION =========================
router.get('/profile', isLoggedIn, userController.getUserProfile);

// LOGOUT ==============================
router.get('/logout', userController.userLogout);

// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

// locally --------------------------------
// LOGIN ===============================

// process the login form
router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/', // redirect to the secure profile section
  failureRedirect: '/user/login', // redirect back to the signup page if there is an error
  failureFlash: true // allow flash messages
}));

// SIGNUP =================================
// process the signup form
router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/', // redirect to the secure profile section
  failureRedirect: '/user/signup', // redirect back to the signup page if there is an error
  failureFlash: true // allow flash messages
}));

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();

  res.redirect('/user');
}

module.exports = router;
