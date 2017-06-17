var express = require("express");
var mongojs = require("mongojs");
var bodyParser = require("body-parser");
var logger = require("morgan");
var CongressMembers = require("./models/congressmembers.js");
var SenateMembers = require("./models/senatemembers.js");

var app = express();

// Set the app up with morgan, body-parser, and a static folder
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Set up a static folder (public) for our web app
app.use(express.static("public"));

// Database configuration
// Save the URL of our database as well as the name of our collection
var databaseUrl = "CapitolHill_Db";
var collections = ["Districts", "Senators", "Congress"];

// Use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);

// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function(error) {
  console.log("Database Error:", error);
});


// -----------------------------------------------------------------------------------------------------
// Routes
// -----------------------------------------------------------------------------------------------------
app.get("/", function(req, res) {
    res.send(index.html)
});

// display every entry in the district collection
app.get("/districts", function(req, res) {
  db.Districts.find({}, function(error, districs) {
     error ? console.log(error) : res.json(districs);
  });
});

// display every member in the Congress collection
app.get("/congress", function(req, res) {
  db.Congress.find({}, function(error, congress) {
     error ? console.log(error) : res.json(congress);
  });
});

// display every member in the Senators collection
app.get("/senators", function(req, res) {
  db.Senators.find({}, function(error, senators) {
     error ? console.log(error) : res.json(senators);
  });
});


// -----------------------------------------------------------------------------------------------------
// POPULATE collections
// -----------------------------------------------------------------------------------------------------
// Run this to populate the Congress Collection:

// for (var i = 0; i < CongressMembers.results[0].members.length; i++){
// // console.log(CongressMembers.results[0].members)
//     db.Congress.insert(CongressMembers.results[0].members[i])
// }

// Run this to populate the Senators Collection:

// for (var i = 0; i < SenateMembers.results[0].members.length; i++){
// // console.log(SenateMembers.results[0].members)
//     db.Senators.insert(SenateMembers.results[0].members[i])
// }
// -----------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------
// Playing with queries. 
// -----------------------------------------------------------------------------------------------------
// Sorts congress by most missed votes descending
// db.Congress.find({}).sort({missed_votes: -1}, (error, senators) => error ? console.log(error) : console.log(senators));

// Sorts congress by Independent party
// db.Congress.find({party: "I"}, (error, senators) => error ? console.log(error) : console.log(senators));

// Finds the representative for a matching district
// db.Congress.find({state: 'CA', district: '27'}, (error, senators) => error ? console.log(error) : console.log(senators));
// -----------------------------------------------------------------------------------------------------


// -----------------------------------------------------------------------------------------------------
// Set the app to listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
// -----------------------------------------------------------------------------------------------------

