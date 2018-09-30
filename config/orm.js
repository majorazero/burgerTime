const connection = require("./connection.js");

const selectAll = function(callback){
  connection.query("SELECT * FROM burgers",function(err,res){
    if(err){
      return res.status(500).end();
    }
    return callback(res);
  });
};

const insertOne = function(){
  console.log(2);
};

const updateOne = function(){
  console.log(3);
};

module.exports = {
  selectAll: selectAll,
  insertOne: insertOne,
  updateOne: updateOne
};
