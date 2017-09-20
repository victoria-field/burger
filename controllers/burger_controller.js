var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var tasty = require("../models/burger.js");
console.log("tasty");
console.log(tasty);
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  tasty.all(function(data) {
    var hbsObject = {
      yum: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  tasty.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  tasty.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

// router.delete("/:id", function(req, res){
// //  we want to delete this burger
//
//   tasty.delete("id =" + req.params.id, function(res){
//     res.redirect("/");
//   })
// });
// Export routes for server.js to use.
module.exports = router;
