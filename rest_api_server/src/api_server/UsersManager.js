var Config = require("../../config.js");
var DB = require("../utils/Database.js");
var mongojs = require('mongojs')

module.exports = {
  getUserWithId: getUserWithId,
  deleteUserWithId: deleteUserWithId,
  getUsers: getUsers,
  createUser: createUser,
  updateUserWithId: updateUserWithId
};

function updateUserWithId(userId, user, callback) {

  var db = DB.openConnection();
  try {

    db.users.update({
      Id: userId
    }, {
      $set: user
    }, function(err, doc) {
      if (err == null) {
        callback(true);
      } else {
        callback(false);
      }

      DB.closeConnection(db);
    });

  } catch (err) {
    DB.closeConnection(db);
    callback(false);
  } finally {

  }
}

function createUser(user, callback) {

  var db = DB.openConnection();
  try {

    db.users.insert(user, function(err, doc) {
      if (err == null) {
        callback(doc, true);
      } else {
        callback(undefined, false);
      }

      DB.closeConnection(db);
    }.bind(this));

  } catch (err) {
    DB.closeConnection(db);
    callback(undefined, false);
  } finally {

  }
}

function getUserWithId(userId, callback) {

  var db = DB.openConnection();
  try {
    db.users.findOne({
        Id: userId,
      }, {
        "Id": 1,
        "Name": 1,
        "Email": 1,
        "City": 1,
        "Enabled": 1,
        "Gender": 1,
        "Profession": 1,
        "Description": 1,
        "Birthdate": 1
      },
      function(err, doc) {
        if (doc == null) {
          callback(undefined, false);
        } else {
          delete doc._id;
          callback(doc, true);
        }

        DB.closeConnection(db);
      }.bind(this));
  } catch (err) {
    DB.closeConnection(db);
    callback(undefined, false);
  } finally {

  }

}

function deleteUserWithId(userId, callback) {
  var db = DB.openConnection();
  try {
    db.users.remove({
        Id: userId,
      },
      function(err, doc) {
        if (err == null) {
          callback(true);
        } else {
          callback(false);
        }

        DB.closeConnection(db);
      }.bind(this));
  } catch (err) {
    DB.closeConnection(db);
    callback(false);
  } finally {

  }

}

function getUsers(callback) {

  var db = DB.openConnection();
  try {
    db.users.find({}, {
        "Id": 1,
        "Name": 1,
        "Email": 1,
        "City": 1,
        "Enabled": 1,
        "Gender": 1,
        "Profession": 1,
        "Description": 1,
        "Birthdate": 1
      },
      function(err, docs) {
        if (docs == null) {
          callback(undefined, false);
        } else {
          docs.forEach(function(user) {
            delete user._id;
          });
          callback(docs, true);
        }

        DB.closeConnection(db);
      }.bind(this));
  } catch (err) {
    DB.closeConnection(db);
    callback(undefined, false);
  } finally {

  }
}
