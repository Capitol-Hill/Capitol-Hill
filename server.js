var express = require("express");
var mongojs = require("mongojs");

var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = 4000;

var databaseUrl = "bloop";
var collections = ["congressman"];
var db = mongojs(databaseUrl, collections);

var app = express();
app.use(express.static("./public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/Controller.js");

app.use("/", routes);

db.on("error", function(error) {
  console.log("Database Error:", error);
});

app.listen(port, function() {
  console.log("listening on" + port);
});
