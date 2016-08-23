var mongoose = require('mongoose');
var encrypt = require('../../utilities/encryption');
var User = require('./user.model');

function createDefaultUsers() {
  User.find({}).exec(function(err, collection) {
    if (collection.length === 0)
    {
      var salt;
      var hash;

      salt = encrypt.createSalt();
      hash = encrypt.hashPassword(salt, "dan");
      User.create({
                businessName: "Robotics",
                abn:          "24 7667 7128",
                firstName:    "Dan",
                lastName:     "Daniel",
                username:     "dan",
                salt:         salt,
                hashPassword: hash,
                isGpsOn:      true,
                photoPath:    "assets/img/Dan.png",
                phone:        "1234567890",
                email:        "admin@administrator.com",
                dateCreated:  new Date(),
                roles:        ["Admin"],
                locations:    ""
            });

        salt = encrypt.createSalt();
        hash = encrypt.hashPassword(salt, "richard");
        User.create({
                  businessName: "React",
                  abn:          "10 3957 2959",
                  firstName:    "Richard",
                  lastName:     "Wiffen",
                  username:     "richard",
                  salt:         salt,
                  hashPassword: hash,
                  isGpsOn:      false,
                  photoPath:    "assets/img/Richard.png",
                  phone:        "098765432",
                  email:        "",
                  dateCreated:  new Date(),
                  roles:        ["Admin"],
                  locations:    ""
              });
    }
  });
}

createDefaultUsers();
