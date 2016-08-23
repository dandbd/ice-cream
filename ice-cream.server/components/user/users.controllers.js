(function () {
'use strict';

var User = require('./user.model');

module.exports = function (router) {

  // =============================================================
  // Routs ending with /users
  // =============================================================
  router.route('/users')

    // GET: List records.
    // ---------------------------------------------
    .get(function(req, res) {
      User.find(function(err, users) {
        if (!err)
          res.json(users);
        else
          res.send(err);
      });
    })

    // POST: Add new record.
    // ---------------------------------------------
    .post(function(req, res) {
      // Create a new instance of the User model
      var user = new User();

      if(typeof req.body.businessName !== "undefined")  user.businessName = req.body.businessName;
      if(typeof req.body.abn !== "undefined")           user.abn = req.body.abn;
      if(typeof req.body.firstName !== "undefined")     user.firstName = req.body.firstName;
      if(typeof req.body.lastName !== "undefined")      user.lastName = req.body.lastName;
      if(typeof req.body.username !== "undefined")      user.username = req.body.username.toLowerCase();
      if(typeof req.body.hashPassword !== "undefined")  user.encryptPassword(req.body.hashPassword);
      if(typeof req.body.isGpsOn !== "undefined")       user.isGpsOn = req.body.isGpsOn;
      if(typeof req.body.photoPath !== "undefined")     user.photoPath = req.body.photoPath;
      if(typeof req.body.phone !== "undefined")         user.phone = req.body.phone;
      if(typeof req.body.email !== "undefined")         user.email = req.body.email.toLowerCase();
      if(typeof req.body.roles !== "undefined")         user.roles = req.body.roles;
      if(typeof req.body.locations !== "undefined")     user.locations = req.body.locations;
      if(typeof req.body.dateCreated !== "undefined")   user.dateCreated = req.body.dateCreated;

      // Save the user and check for errors
      user.save(function(err) {
          if (!err){
            res.json({ message: "User '" + user.firstName + "' created!" });
          }
          else {
            console.log(err);
            res.send(err);
          }
      });
    });

  // =============================================================
  // Routs ending with /users/:id
  // =============================================================
  router.route('/users/:id')

    // GET: Return single record.
    // ---------------------------------------------
    .get(function(req, res) {
      User.findById(req.params.id, function(err, user) {
        if (!err)
          res.json(user);
        else
          res.send(err);
      });
    })

    // PUT: Update record.
    // ---------------------------------------------
    .put(function(req, res) {

      // Find the user first
      User.findById(req.params.id, function(err, user) {

        if (!err) {
          if(typeof req.body.businessName !== "undefined")  user.businessName = req.body.businessName;
          if(typeof req.body.abn !== "undefined")           user.abn = req.body.abn;
          if(typeof req.body.firstName !== "undefined")     user.firstName = req.body.firstName;
          if(typeof req.body.lastName !== "undefined")      user.lastName = req.body.lastName;
          if(typeof req.body.username !== "undefined")      user.username = req.body.username.toLowerCase();
          if(typeof req.body.hashPassword !== "undefined")  user.encryptPassword(req.body.hashPassword);
          if(typeof req.body.isGpsOn !== "undefined")       user.isGpsOn = req.body.isGpsOn;
          if(typeof req.body.photoPath !== "undefined")     user.photoPath = req.body.photoPath;
          if(typeof req.body.phone !== "undefined")         user.phone = req.body.phone;
          if(typeof req.body.email !== "undefined")         user.email = req.body.email.toLowerCase();
          if(typeof req.body.roles !== "undefined")         user.roles = req.body.roles;
          if(typeof req.body.locations !== "undefined")     user.locations = req.body.locations;
          if(typeof req.body.dateCreated !== "undefined")   user.dateCreated = req.body.dateCreated;

          // Update the user and check for errors
          user.save(function(err) {
            if (!err)
              res.json({ message: "User '" + user.firstName + "' updated!" });
            else {
              res.send(err);
            }
          });
        }
        else
          res.send(err);
      });
    })

    // DELETE: Delete record.
    // ---------------------------------------------
    .delete(function(req, res) {
      if(typeof req.params.id !== "undefined") {
        User.remove(
          {
            _id: req.params.id
          },
          function(err, user) {
            if (err)
              res.json({ message:  "User '" + req.body.firstName + "' deleted!"  });
            else
              res.send(err);
        });
      }
    });
};
})();
