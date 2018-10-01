const orm = require("../config/orm.js");

module.exports = {
  /**
  * Pulls all burger entries and resorts them as devoured or undevoured before repackaging them as a singular object.
  * @param {Function} callback - Used to pull data out of the Async.
  */
  selectAll : function(callback){
    orm.selectAll("burgers",function(data){
      let dBurger = [];
      let udBurger = [];
      //we'll reformat the 0/1 to false/true
      for(let i = 0; i < data.length; i++){
        if(data[i].devoured === 1){
          dBurger.push(data[i]);
        }
        else {
          udBurger.push(data[i]);
        }
      }
      callback({
        dBurger: dBurger,
        udBurger: udBurger
      });
    });
  },
  /**
  * Inserts a new burger in the database.
  * @param {String} burger - The name of the new burger.
  * @param {Function} callback - Used to pull data out of the Async.
  */
  insertOne : function(burger,callback){
    orm.insertOne("burgers","burger_name",burger,function(data){
      callback(data);
    });
  },
  /**
  * Changes the state of a burger to either devoured or undevoured.
  * @param {Boolean} bool - The new devoured boolean to update.
  * @param {Integer} id - The id of the specific entry targeted.
  * @param {Function} callback - Used to pull data out of the Async.
  */
  updateOne : function(bool,id,callback){
    orm.updateOne("burgers","devoured",(bool === "true"),parseInt(id),function(data){
      callback(data);
    });
  }
};
