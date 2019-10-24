var UsersManager = require("./UsersManager.js");
var Config = require("../../config.js");

module.exports = class APIServer {

  constructor(port) {
    var bodyParser = require('body-parser');
    this._express = require('express')().use(bodyParser.json()).use(bodyParser.urlencoded({
      extended: true
    })).use(function(req, res, next) {

      var allowedOrigins = Config.allowedOrigins;
      var origin = req.headers.origin;
      if (allowedOrigins.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
      }

      res.header("Access-Control-Allow-Credentials", "true");
      res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Content-Type", "application/json;charset=utf-8");
      next();
    });
    this._port = port;
    this._server = require('http').createServer(this._express);
    this.initializeEndpoints();
  }

  startServer() {
    this.stopServer();
    var self = this;

    this._server.listen(this._port, function() {
      console.log('Server listening at port %d', self._port);
    });

  }

  stopServer() {
    this._server.close(function() {
      console.log('Server stoped');
    });
  }

  initializeEndpoints() {

    /*  POST /users */

    this._express.post('/users', function(req, res) {

	  console.log("POST /users");

          UsersManager.createUser(req.body, function(user, success) {
            if (success) {
              // Regenerate de json file for users
              res.writeHead(200);
              res.end(JSON.stringify({}));
            } else {
              // unexpected error
              res.writeHead(500);
              res.end();
            }
          }.bind(this));

    }.bind(this));

    /*  GET /users/:id */

    this._express.get('/users/:id', function(req, res) {

	  console.log("GET /users/"+req.params.id);

          UsersManager.getUserWithId(Number(req.params.id), function(user, success) {
            if (success) {
              res.writeHead(200);
              res.end(JSON.stringify(user));
            } else {
              // unexpected error
              res.writeHead(500);
              res.end();
            }
          }.bind(this));

    }.bind(this));

    /*  DELETE /users/:id */

    this._express.delete('/users/:id', function(req, res) {

	  console.log("DELETE /users/"+req.params.id);

          UsersManager.deleteUserWithId(Number(req.params.id), function(success) {
            if (success) {
              // Regenerate de json file for users
              res.writeHead(200);
              res.end(JSON.stringify({}));
            } else {
              // unexpected error
              res.writeHead(500);
              res.end();
            }
          }.bind(this));

    }.bind(this));

    /*  PUT /users/:id */

    this._express.put('/users/:id', function(req, res) {

	  console.log("PUT /users/"+req.params.id);

          UsersManager.updateUserWithId(Number(req.params.id), req.body, function(success) {
            if (success) {
              // Regenerate de json file for users
              res.writeHead(200);
              res.end(JSON.stringify({}));
            } else {
              // unexpected error
              res.writeHead(500);
              res.end();
            }
          }.bind(this));

    }.bind(this));

    /*  GET /users */

    this._express.get('/users', function(req, res) {

	  console.log("GET /users");

          UsersManager.getUsers(function(users, success) {
            if (success) {
              res.writeHead(200);
              res.end(JSON.stringify(users));
            } else {
              // unexpected error
              res.writeHead(500);
              res.end();
            }
          }.bind(this));

    }.bind(this));

  }

};
