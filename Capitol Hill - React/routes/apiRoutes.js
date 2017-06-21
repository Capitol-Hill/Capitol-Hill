var express = require("express");
var mongojs = require("mongojs");
var app = express();


//var articleController = require("../controllers/articleControllers");

var router = new express.Router();

var databaseUrl = "CapitolHill_Db";
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

module.exports = router;
