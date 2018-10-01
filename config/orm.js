const connection = require("./connection.js");

module.exports = {
  /**
  * This will gives you all the information provided by a specified table.
  * @param {String} tableName - Name of the table.
  * @param {Function} callback - Used to pull data out of the Async
  */
  selectAll : function(tableName,callback){
    connection.query("SELECT * FROM ??",[tableName],function(err,res){
      if(err){
        return res.status(500).end();
      }
      return callback(res);
    });
  },
  /**
  * This will add an additional item to an existing table. With restrictions that the item accepts a new insert of only one property.
  * @param {String} tableName - Name of the table.
  * @param {String} colName - Name of the column that will be used to input new data.
  * @param {String} colVal - The actual value of the column.
  * @param {Function} callback - Used to pull data out of the Async
  */
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
  /**
  * Can update a single property of a specific entry in a table.
  * @param {String} tableName - Name of the table.
  * @param {String} colName - Name of the column that will be used to input new data.
  * @param {String} colVal - The actual value of the column.
  * @param {Integer} id - The id of the specific entry targeted.
  * @param {Function} callback - Used to pull data out of the Async
  */
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
