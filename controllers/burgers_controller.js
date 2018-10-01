const burgers = require("../models/burger.js");

module.exports = function(app){
  /**
  * This will recieve the data from the burger model and render it to the index.handlebars
  */
  app.get("/",function(req,res){
    burgers.selectAll(function(data){
      res.render("index",data);
    });
  });
  /**
  * This will handle adding new Burgers to the list.
  */
  app.post("/",function(req,res){
    console.log(req.body);
    burgers.insertOne(req.body.burgerName,function(data){
      res.send("Added!");
    });
  });
  /**
  * This will handle updating the state of existing burgers (Whether its devoured or not.)
  */
  app.put("/",function(req,res){
    burgers.updateOne(req.body.bool,req.body.id,function(data){
      res.send("Updated!");
    });
  });
};
