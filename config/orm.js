const connection = require("./connection.js");

const selectAll = function(){
  console.log(1);
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
