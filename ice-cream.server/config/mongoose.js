var mongoose = require('mongoose');

module.exports = function(config) {
  //-------------------------------------------------------
  // Connect to the MongoDB - Via Mongoose
  //-------------------------------------------------------
  var mongodb = mongoose.connect(config.db).connection;
  mongodb.on('error', console.error.bind(console, 'connection error:'));
  mongodb.once('open', function callback() {
    console.log(" - Mongo DB: ice-cream '" + (process.env.NODE_ENV).toUpperCase() + "' database opened.");
  });
};
