const connection = require("./connection.js");

const selectAll = function(tableName,callback){
  connection.query("SELECT * FROM ??",[tableName],function(err,res){
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
  //connection.query("UPDATE ?? SET ?? = ? WHERE ?? = ?");
};

module.exports = {
  selectAll: selectAll,
  insertOne: insertOne,
  updateOne: updateOne
};
