module.exports = function(app){
  app.get("/",function(req,res){
    res.render("index",{item: 3});
  });
};
