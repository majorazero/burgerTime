const connection = require("./connection.js");

module.exports = {
  selectAll : function(tableName,callback){
    connection.query("SELECT * FROM ??",[tableName],function(err,res){
      if(err){
        return res.status(500).end();
      }
      return callback(res);
    });
  },

  insertOne : function(tableName,colName,colVal,callback){
    connection.query("INSERT INTO ?? SET ?? = ?",[tableName,colName,colVal],function(err,res){
      if(err){
        return res.status(500).end();
      }
      else {
        return callback(res);
      }
    });
  },

  updateOne : function(tableName,colName,colVal,id,callback){
    connection.query("UPDATE ?? SET ?? = ? WHERE id = ?",[tableName,colName,colVal,id],function(err,res){
      if(err){
        return res.status(500).end();
      }
      else {
        return callback(res);
      }
    });
  }
};
