// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var tasty = {
  all: function(cb) {
    orm.all("yum", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("yum", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("yum", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb){
    orm.delete("yum", condition, cb)
  }
};

module.exports = tasty;
