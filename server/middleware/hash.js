const bcrypt = require('bcrypt');
var ash = (req, res, next) => {
//   req.body.password;
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(req.body.password, salt);
  req.body.password = hash;
  req.body.salt = salt;
  next();
    // req.body.password = newPassHash
};

module.exports = ash;