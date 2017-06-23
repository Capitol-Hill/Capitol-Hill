// load all the things we need
var LocalStrategy = require('passport-local').Strategy;

// load up the user model
var User = require('../../models/user');

// load the auth variables like google (Dream feature)
//var configAuth = require('./auth'); // use this one for testing

module.exports = function(passport) {

  // =========================================================================
  // passport session setup ==================================================
  // =========================================================================
  // required for persistent login sessions
  // passport needs ability to serialize and unserialize users out of session

  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  // =========================================================================
  // LOCAL LOGIN =============================================================
  // =========================================================================
  passport.use('local-login', new LocalStrategy({
    // by default, local strategy uses username and password, we will override with email
    usernameField: 'loginEmail',
    passwordField: 'loginPassword',
    passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
  }, function(req, email, password, done) {
    if (email) {
      email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching
      console.log("this here is email");
    }
    // asynchronous
    process.nextTick(function() {
      User.findOne({
        'local.email': email
      }, function(err, user) {
        // if there are any errors, return the error
        if (err)
          return done(err);

        // if no user is found, return the message
        if (!user)
          return done(null, false, {message: 'No User Found'});

        if (!user.validPassword(password))
          return done(null, false, {message: 'Incorrect password.'}); // all is well, return user
        else
          return done(null, user);
        }
      );
    });

  }));

  // =========================================================================
  // LOCAL SIGNUP ============================================================
  // =========================================================================
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'signupEmail',
    passwordField: 'signupPassword',
    passReqToCallback: true
  }, (req, email, password, done) => {
    console.log("email:", email);
    console.log("password", password);
    console.log(req.body);

    // Use lower-case e-mails to avoid case-sensitive e-mail matching
    if (email) {
      email = email.toLowerCase();
    }

    // asynchronous
    process.nextTick(function() {
      // if the user is not already logged in:
      User.findOne({
        'local.email': email
      }, function(err, user) {
        // if there are any errors, return the error
        if (err) {
          return done(err);
        }
        // check to see if theres already a user with that email
        if (user) {
          return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
        }

        else {
          // create the user
          var newUser = new User();
          newUser.local.email = email;
          newUser.local.password = newUser.generateHash(password);
          newUser.local.address = req.body.address;

          newUser.save(function(err) {
            if (err)
              return done(err);

            return done(null, newUser);
          });
        }
      });

    });
  }));
};
