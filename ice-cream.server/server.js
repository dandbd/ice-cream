//-------------------------------------------------------
// Create the Node Application
//-------------------------------------------------------

var DEVELOPMENT_ENVIRONMENT = 'development';

// Determine if in development or production mode
var env = process.env.NODE_ENV = process.env.NODE_ENV || DEVELOPMENT_ENVIRONMENT;

// Load in the express module
var express = require('express');

// Create the express application
var app = express();

// Get an instance of the express Router
var router = express.Router();

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();

  //res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //next();
});


var config = require('./config/config')[env];
require('./config/express')(app, config);
require('./config/mongoose')(config);
require('./config/routes')(app, router);

// Controllers and Models
require('./components/user/users.controllers')(router);

// Insert default data into Mongo DB
require('./components/user/user.default');


//-------------------------------------------------------
// Tell the application to start listening to requests
//-------------------------------------------------------
app.listen(config.port);
console.log(' ');
console.log('Ice-Cream Server listening on port ' + config.port + '...');
