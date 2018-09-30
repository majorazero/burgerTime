const burgers = require("../models/burger.js");

module.exports = function(app){
  app.get("/",function(req,res){
    burgers.selectAll(function(data){
      console.log(data);
      res.render("index",data);
    });
  });
  app.put("/",function(req,res){
    console.log("updating!");
  });
};
