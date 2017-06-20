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
app.use("/", routes);
// -------------------------------------------------

var db = process.env.MONGODB_URI || "mongodb://localhost/CapitolHill_Db";

// Connect mongoose to our database
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

app.post("/results", function(req, res) {
  var first = req.body.first;
  var last = req.body.last;
  db.Senators.find({first_name: first, last_name: last }, function(error, senator) {
    if (error) { console.log(error)}
     var hbsObj = senator;
     res.json(senator);
  });
});

// Start the server
app.listen(PORT, function() {
  console.log("Now listening on port %s! Visit localhost:%s in your browser.", PORT, PORT);
});
