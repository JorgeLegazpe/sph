const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const Pro = require("../models/Profesional");
const bcrypt = require("bcrypt");

passport.use(
  "user",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    (email, password, done) => {
      User.findOne({ email })
        .then(foundUser => {
          if (!foundUser) {
            done(null, false, { message: "Email incorrecto" });
            return;
          }

          if (!bcrypt.compareSync(password, foundUser.password)) {
            done(null, false, { message: "Password incorrecta" });
            return;
          }

          done(null, foundUser);
        })
        .catch(err => done(err));
    }
  )
);

passport.use(
  "pro",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    (email, password, done) => {
      Pro.findOne({ email })
        .then(foundUser => {
          if (!foundUser) {
            done(null, false, { message: "Email incorrecto" });
            return;
          }

          if (!bcrypt.compareSync(password, foundUser.password)) {
            done(null, false, { message: "Password incorrecta" });
            return;
          }

          done(null, foundUser);
        })
        .catch(err => done(err));
    }
  )
);
