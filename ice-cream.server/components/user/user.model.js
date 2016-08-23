var mongoose = require('mongoose');
var encrypt = require('../../utilities/encryption');

var Schema = mongoose.Schema;

var UserSchema = Schema({
  businessName: String,
  abn:          String,
  firstName:    { type:String,  required: 'First Name: is required!' },
  lastName:     { type:String,  required: 'Last Name: is required!' },
  username:     { type:String,  required: '{PATH}: is required!' },
  salt:         { type:String,  required: '{PATH}: is required!' },
  hashPassword: { type:String,  required: 'Password is required!' },
  isGpsOn:      { type:Boolean, default: false },
  photoPath:    String,
  phone:        String,
  email:        String,
  dateCreated:  { type: Date, default: Date.now },
  roles:        [String],
  locations:    [String]
});

UserSchema.methods = {
  authenticate: function(passwordToMatch) {
    return encrypt.hashPassword(this.salt, passwordToMatch) === this.hashPassword;
  },

  hasRole: function(role) {
    return this.roles.indexOf(roles) > -1;
  },

  encryptPassword: function (newPassword) {
    this.salt = encrypt.createSalt();
    this.hashPassword = encrypt.hashPassword(this.salt, newPassword);
  }
};

module.exports = mongoose.model('User', UserSchema);
