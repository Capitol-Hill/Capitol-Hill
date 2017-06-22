// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongojs = require("mongojs");
var mongoose = require("mongoose");
var routes = require("./routes/routes");

//Import login features
var passport = require('passport');
var flash    = require('connect-flash');
var cookieParser = require('cookie-parser');
var session      = require('express-session');

// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 8000;

// Create Instance of Express
var app = express();

// Run Morgan for Logging
app.use(logger("dev"));// log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// required for passport
app.use(session({
    secret: 'passportiloatheyouwithapassion', // session secret
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
// load userRoutes and pass in our app and fully configured passport
require("./app/config/passport")(passport);

app.use(express.static(__dirname +"/public"));
app.use("/", routes);
// -------------------------------------------------

//grabbing search value and rendering results data
// app.post("/results", function(req, res) {
// var first = req.body.first;
// var last = req.body.last;
//  db.Senators.find({first_name: first, last_name: last }, function(error, senator) {
//    if (senator.length > 0) {
//      console.log(senator)
//      res.json(senator);
//    } else {
//      console.log("else")
//     db.Congress.find({first_name: first, last_name: last }, function(error, congressman) {
//        console.log(congressman)
//       res.json(congressman);
//      });
//    };
//  });
// });


// Connect mongoose to our database
var db = process.env.MONGODB_URI || "mongodb://localhost/captital-hill-react" || "mongodb://localhost/CapitolHill_Db";

mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.error(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});


// Start the server
app.listen(PORT, function() {
  console.log("Now listening on port %s! Visit localhost:%s in your browser.", PORT, PORT);
});
