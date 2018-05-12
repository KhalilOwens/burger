var express = require("express");

var router = express.Router();
var orm = require("/config/orm.js");    

  
  router.get("/", function(req, res) {
    orm.selectAll(function(data) {
      var hbsObject = {
        orm: data
      };
      console.log(hbsObject);
      res.render("home", hbsObject);
    });
  });

  router.post("/api/:burgers", function(req, res) {
    orm.insertOne([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
    });
  });

  router.put("/api/cats/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    cat.updateOne({
      id: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });   

  module.exports = router;