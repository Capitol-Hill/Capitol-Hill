var express = require("express");
var mongojs = require("mongojs");
var app = express();
var CongressMembers = require("../data/congressmembers.js");
var SenateMembers = require("../data/senatemembers.js");
var DistrictsData = require("../data/All_Districts.js")
var DistrictsWithParty = require("../data/All_Districts_With_Party.js");

//var articleController = require("../controllers/articleControllers");

var router = new express.Router();

var databaseUrl = "CapitolHill_Db" || process.env.MONGODB_URI;
var collections = ["Districts", "Senators", "Congress", "DistrictsTest"];
// var db = process.env.MONGODB_URI || "mongodb://localhost/CapitolHill_Db";

// Use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);

router.get("/districts", function(req, res) {
    db.Districts.find({}, function(error, districs) {
        error ? console.log(error) : res.json(districs);
    });
});

// display every member in the Congress collection
router.get("/congress", function(req, res) {
    db.Congress.find({in_office: "true"}, function(error, congress) {
        error ? console.log(error) : res.json(congress);
    });
});

// display every member in the Senators collection
router.get("/senators", function(req, res) {
    db.Senators.find({in_office: "true"}, function(error, senators) {
        error ? console.log(error) : res.json(senators);
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
  // // Run this to populate the Congress Collection:
  // -----------------------------------------------------------------------------------------------------
  // for (var i = 0; i < CongressMembers.members.length; i++){
  //   // console.log(CongressMembers.members[i])
  //     db.Congress.insert(CongressMembers.members[i]);
  // }

  // -----------------------------------------------------------------------------------------------------
  // This function WAS used to populate images in the Congress database, but is no longer required with the new data model:
  // -----------------------------------------------------------------------------------------------------
  // for (var i = 0; i < CongressMembers.results[0].members.length; i++){
  // var id = CongressMembers.results[0].members[i].id;
  // var imageURL = `https://theunitedstates.io/images/congress/450x550/${id}.jpg`;
  //    db.Congress.insert(CongressMembers.results[0].members[i]);
  //    db.Congress.update(CongressMembers.results[0].members[i], {$set: {image: imageURL}});
  //    var contactURL = CongressMembers.results[0].members[i].url + "/contact";
  //    db.Congress.insert(CongressMembers.results[0].members[i]);
  //    db.Congress.update(CongressMembers.results[0].members[i], {$set: {image: imageURL}});
  //    db.Congress.update(CongressMembers.results[0].members[i], {$set: {contact_form: contactURL}});
  // }

  // -----------------------------------------------------------------------------------------------------
  // Run this to populate the Senators Collection:
  // -----------------------------------------------------------------------------------------------------
  for (var i = 0; i < SenateMembers.members.length; i++){
   var id = SenateMembers.members[i].id;
   var imageURL = SenateMembers.members[i].image;
   // console.log(SenateMembers.results[0].members)
     db.Senators.insert(SenateMembers.members[i])
     db.Senators.update(SenateMembers.members[i], {$set: {image: imageURL}});
      // console.log(SenateMembers.results[0].members)
  }

  // -----------------------------------------------------------------------------------------------------
  // This function WAS used to populate images in the Senators database, but is no longer required with the new data model:
  // -----------------------------------------------------------------------------------------------------
  // for (var i = 0; i < SenateMembers.results[0].members.length; i++){
  //   var firstName = SenateMembers.results[0].members[i].first_name.trim().replace(/ /g, "-");
  //   var lastName = SenateMembers.results[0].members[i].last_name.trim().replace(/ /g, "-");
  //   var imageURL = `https://cdn.civil.services/senate/headshots/512x512/${firstName}-${lastName}.jpg`;
  //   console.log(SenateMembers.results[0].members)
      // db.Senators.insert(SenateMembers.results[0].members[i])
  // db.Senators.update(SenateMembers.results[0].members[i], {$set: {image: imageURL.toLowerCase()}});
  // }

module.exports = router;
