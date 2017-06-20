var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongojs = require("mongojs");
var methodOverride = require("method-override");
var port = 4000;
// var CongressMembers = require("./data/congressmembers.js");
// var SenateMembers = require("./data/senatemembers.js");
// var DistrictsData = require("./data/All_Districts.js")
// var DistrictsWithParty = require("./data/All_Districts_With_Party.js");

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

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// var routes = require("./controllers/Controller.js");

// app.use("/", routes);


// Database configuration
// Save the URL of our database as well as the name of our collection
var databaseUrl = "CapitolHill_Db";
var collections = ["Districts", "Senators", "Congress", "DistrictsTest"];

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
    // res.render("index")
    res.send(index.html)
});

app.post("/search", function(req, res) {
    // res.render("index")
    res.json(req.params.body)
});

// display every entry in the district collection
app.get("/districts", function(req, res) {
    db.Districts.find({}, function(error, districs) {
        error ? console.log(error) : res.json(districs);
    });
});

// display every member in the Congress collection
app.get("/congress", function(req, res) {
    db.Congress.find({in_office: "true"}, function(error, congress) {
        error ? console.log(error) : res.json(congress);
    });
});

// display every member in the Senators collection
app.get("/senators", function(req, res) {
    db.Senators.find({in_office: "true"}, function(error, senators) {
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
    db.Senators.find({ first_name: first, last_name: last }, function(error, senator) {
        if (error) { console.log(error) }
        var hbsObj = senator;
        res.json(senator);
    });
});




// -----------------------------------------------------------------------------------------------------
// POPULATE collections
// -----------------------------------------------------------------------------------------------------
// Run this to populate the GeoJSON districts database, included with Party affiliation:
// -----------------------------------------------------------------------------------------------------
// for (let i = 0; i < DistrictsWithParty.length; i++) {
//    db.Districts.insert(DistrictsWithParty[i]);
// }
// -----------------------------------------------------------------------------------------------------
// This function was used to populate the GeoJSON files in the database with party affiliation of the district's representative. 
// (This is now no longer needed with the above code):
// -----------------------------------------------------------------------------------------------------
// Put party preferences in GeoJSON properties
// for (let i = 0; i < DistrictsData.length; i++) {
//     var CodeArray = DistrictsData[i].properties.Code.split("-");
//     var stateID = CodeArray[0];
//     var districtID = CodeArray[1] === "AL" ? "1" : CodeArray[1];
//     db.DistrictsTest.insert(DistrictsData[i])
//     db.Congress.find({ state: stateID, district: parseInt(districtID).toString() }, function(err, res) {
//         // err ? console.log(err) : console.log(res);
//         // console.log(DistrictsData[i]._id)
//         // console.log(DistrictsData[i].properties.Code)
//         if (res[0].party === "R") {
//             db.DistrictsTest.update({ _id: DistrictsData[i]._id }, { $set: { properties: { Party: "Republican", Code: DistrictsData[i].properties.Code, District: DistrictsData[i].properties.District } } }, function(err, res) {
//                 err ? console.log(err) : console.log(res)
//             });
//         } else if (res[0].party === "D") {
//             db.DistrictsTest.update({ _id: DistrictsData[i]._id }, { $set: { properties: { Party: "Democrat", Code: DistrictsData[i].properties.Code, District: DistrictsData[i].properties.District } } }, function(err, res) {
//                 err ? console.log(err) : console.log(res);
//             });
//         } else if (res[0].party === "I") {
//             db.DistrictsTest.update({ _id: DistrictsData[i]._id }, { $set: { properties: { Party: "Independent", Code: DistrictsData[i].properties.Code, District: DistrictsData[i].properties.District } } }, function(err, res) {
//                 err ? console.log(err) : console.log(res);
//             });
//         }
//     })
// }
// -----------------------------------------------------------------------------------------------------
// Run this to populate the Congress Collection:
// -----------------------------------------------------------------------------------------------------
// for (var i = 0; i < CongressMembers.results.length; i++){
//     db.Congress.insert(CongressMembers.results[i]);
// }

// -----------------------------------------------------------------------------------------------------
// This function WAS used to populate images in the Senators database, but is no longer required with the new data model:
// -----------------------------------------------------------------------------------------------------
// for (var i = 0; i < CongressMembers.results[0].members.length; i++){
// var id = CongressMembers.results[0].members[i].id;
// var imageURL = `https://theunitedstates.io/images/congress/450x550/${id}.jpg`;
    // var contactURL = CongressMembers.results[0].members[i].url + "/contact";
    // db.Congress.insert(CongressMembers.results[0].members[i]);
    // db.Congress.update(CongressMembers.results[0].members[i], {$set: {image: imageURL}});
    // db.Congress.update(CongressMembers.results[0].members[i], {$set: {contact_form: contactURL}});
// }
// -----------------------------------------------------------------------------------------------------
// Run this to populate the Senators Collection:
// -----------------------------------------------------------------------------------------------------
// for (var i = 0; i < SenateMembers.length; i++){
//     db.Senators.insert(SenateMembers[i])
//     console.log(SenateMembers[i])
// }

// -----------------------------------------------------------------------------------------------------
// This function WAS used to populate images in the Senators database, but is no longer required with the new data model:
// -----------------------------------------------------------------------------------------------------
// for (var i = 0; i < SenateMembers.results[0].members.length; i++){
//   var firstName = SenateMembers.results[0].members[i].first_name.trim().replace(/ /g, "-");
//   var lastName = SenateMembers.results[0].members[i].last_name.trim().replace(/ /g, "-");
//   var imageURL = `https://cdn.civil.services/senate/headshots/512x512/${firstName}-${lastName}.jpg`;
//   console.log(SenateMembers.results[0].members)
//     // db.Senators.insert(SenateMembers.results[0].members[i])
// db.Senators.update(SenateMembers.results[0].members[i], {$set: {image: imageURL.toLowerCase()}});
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
// Testing a search bar function
// -----------------------------------------------------------------------------------------------------
// // import
// const OpenStreetMapProvider = require('leaflet-geosearch');
// // setup
// const provider = new OpenStreetMapProvider();
// // search
// const results = await provider.search({ query: input.value });

// -----------------------------------------------------------------------------------------------------
// Set the app to listen on port 4000

app.listen(port, function() {
    console.log("App running on port " + port);
});
// -----------------------------------------------------------------------------------------------------
