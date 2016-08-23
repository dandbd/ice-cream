// Load in the express module
var express = require('express');

// Use the Morgan logger (express 4+)
var logger = require('morgan');
var path = require('path');
var bodyParser  = require('body-parser');
var autoprefixer = require('autoprefixer-stylus');

// Serve CSS files
var stylus = require('stylus');

// Passport Authentication
var session = require('express-session');
var cookieParser = require('cookie-parser');
var passport = require('passport');

module.exports = function(app, config){

  // Setting up stylus middlewhere
  function compile(str, path) {
    return stylus(str).set('filename', path);
  }

  // Configure the express applicaiton
  app.use(logger('dev'));
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(session({
    secret: 'B91173ABCF98DC511D63334A5E3BF8B54D166F7829D5B37393FC2E44DB18D22D4499B3E6371F82541D84E4D995E75183C269D25CA75F734855FE',
    resave: false,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(stylus.middleware({
    src: path.join(config.rootPath, '/ice-cream.client/www'),
    compile: function(str, path) {
      return stylus(str)
        .use(autoprefixer())   // autoprefixer
        .set('filename', path) // @import
        .set('compress', true) // compress
      ;
    }
  }));

  app.use(express.static(path.join(config.rootPath, '/ice-cream.client/www')));
};
