const burgers = require("../models/burger.js");

module.exports = function(app){

  app.get("/",function(req,res){
    burgers.selectAll(function(data){
      res.render("index",data);
    });
  });

  app.put("/",function(req,res){
    burgers.updateOne(req.body.bool,req.body.id,function(data){
      res.send("Updated!");
    });
  });
};
