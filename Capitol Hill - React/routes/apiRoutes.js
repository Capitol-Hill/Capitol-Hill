var express = require("express");

//var articleController = require("../controllers/articleControllers");

var router = new express.Router();

// // Get all quotes (or optionally a specific quote with an id)
// router.get("/saved", articleController.index);
// // Create a new article using data passed in req.body
// router.post("/saved", articleController.create);
// // Delete a specific quote using the id in req.params.id
// router.delete("/saved/:id", articleController.destroy);

module.exports = router;
