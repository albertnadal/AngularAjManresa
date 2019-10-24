var mongojs = require('mongojs')
var Config = require("../../config.js");

module.exports = {
  openConnection: openConnection,
  closeConnection: closeConnection
};

function openConnection() {
  var mongo_url;

  if(Config.database.user == '') {
    mongo_url = "mongodb://"+Config.database.host+":"+Config.database.port+"/"+Config.database.database;
  } else {
    mongo_url = "mongodb://"+Config.database.user+":"+Config.database.password+"@"+Config.database.host+":"+Config.database.port+"/"+Config.database.database;
  }

  return mongojs(mongo_url, []);
}

function closeConnection(db) {
  db.close();
}
