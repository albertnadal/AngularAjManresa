console.log("Test API Server");
var APIServer = require("./src/api_server/APIServer.js");
var httpAPIServer = new APIServer(2015);
httpAPIServer.startServer();
