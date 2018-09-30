const orm = require("../config/orm.js");

module.exports = {
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
  }
};
