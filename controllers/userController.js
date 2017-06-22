var User = require("../models/user");

module.exports = {

  getUserProfile:  function(req, res) {
      res.redirect('/user', {
          user : req.user
      });
  },

  userLogout: function(req, res) {
      req.logout();
      res.redirect('/');
  }


};
