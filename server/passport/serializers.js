const passport = require("passport");
const User = require("../models/User");
const Pro = require("../models/Profesional");

passport.serializeUser((loggedInUser, cb) => {
  cb(null, loggedInUser);
});

passport.deserializeUser((user, cb) => {
  if (user.rol == "user") {
    User.findById(user._id)
      .then(userDocument => {
        cb(null, userDocument);
      })
      .catch(err => {
        cb(err);
      });
  } else {
    Pro.findById(user._id)
      .then(userDocument => {
        cb(null, userDocument);
      })
      .catch(err => {
        cb(err);
      });
  }
});
