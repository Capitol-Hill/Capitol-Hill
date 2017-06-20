// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var routes = require("./routes/routes");



// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Create Instance of Express
var app = express();

// Run Morgan for Logging
app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(__dirname +"/public"));
// app.use("/", routes);
// -------------------------------------------------
var mongojs = require("mongojs");

// var db = process.env.MONGODB_URI || "mongodb://localhost/CapitolHill_Db";
var databaseUrl = "CapitolHill_Db";
var collections = ["Districts", "Senators", "Congress", "DistrictsTest"];

// Use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);
// Connect mongoose to our database
// mongoose.connect(db, function(error) {
//   // Log any errors connecting with mongoose
//   if (error) {
//     console.error(error);
//   }
//   // Or log a success message
//   else {
//     console.log("mongoose connection is successful");
//   }
// });

//grabbing search value and rendering results data
 app.post("/results", function(req, res) {
 var first = req.body.first;
 var last = req.body.last;
  db.Senators.find({first_name: first, last_name: last }, function(error, senator) {
    if (senator.length > 0) {
      console.log(senator)
      res.json(senator);
    } else {
      console.log("else")
     db.Congress.find({first_name: first, last_name: last }, function(error, congressman) {
        console.log(congressman)
       res.json(congressman);
      });
    };
  });
 });
// Start the server
app.listen(PORT, function() {
  console.log("Now listening on port %s! Visit localhost:%s in your browser.", PORT, PORT);
});
