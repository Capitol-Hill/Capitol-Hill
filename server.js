var express = require("express");
var mongojs = require("mongojs");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var port = 4000;
var logger = require("morgan");
var CongressMembers = require("./models/congressmembers.js");
var SenateMembers = require("./models/senatemembers.js");

var app = express();

// Set the app up with morgan, body-parser, and a static folder
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(methodOverride("_method"));


// Set up a static folder (public) for our web app
app.use(express.static("public"));


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// var routes = require("./controllers/Controller.js");

// app.use("/", routes);


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
    res.render("index")
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
// Handlebars Routes
// -----------------------------------------------------------------------------------------------------

//grabbing search value and rendering results data
app.post("/results", function(req, res) {
  var first = req.body.first;
  var last = req.body.last;
  db.Senators.find({first_name: first, last_name: last }, function(error, senator) {
    if (error) { console.log(error)}
     var hbsObj = senator;
     res.json(senator);
  });
});


// -----------------------------------------------------------------------------------------------------
// POPULATE collections
// -----------------------------------------------------------------------------------------------------
// Run this to populate the Congress Collection:
//
// for (var i = 0; i < CongressMembers.results[0].members.length; i++){
// var id = CongressMembers.results[0].members[i].id;
// var imageURL = `https://theunitedstates.io/images/congress/450x550/${id}.jpg`;
//     db.Congress.insert(CongressMembers.results[0].members[i]);
//     db.Congress.update(CongressMembers.results[0].members[i], {$set: {image: imageURL}});
// }
//
// // Run this to populate the Senators Collection:
//
// for (var i = 0; i < SenateMembers.results[0].members.length; i++){
//   var id = SenateMembers.results[0].members[i].id;
//   var imageURL = `https://theunitedstates.io/images/senate/450x550/${id}.jpg`;
//   console.log(SenateMembers.results[0].members)
//     db.Senators.insert(SenateMembers.results[0].members[i])
//     db.Senators.update(SenateMembers.results[0].members[i], {$set: {image: imageURL}});
// }
// // -----------------------------------------------------------------------------------------------------

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
// Set the app to listen on port 4000

app.listen(port, function() {
  console.log("App running on port " + port);
});
// -----------------------------------------------------------------------------------------------------
