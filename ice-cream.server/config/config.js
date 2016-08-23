
var path = require('path');
var rootPath = path.normalize(__dirname + '/../');

module.exports = {
  development: {
    db: 'mongodb://127.0.0.1:27017/ice-cream',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    db: 'mongodb://admin:passwordadmin@ds061258.mlab.com:61258/ice-cream',
    rootPath: rootPath,
    port: process.env.PORT || 80
  }
};
