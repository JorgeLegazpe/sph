const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");
const Pro = require("../models/Profesional");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

// router.get("/login", (req, res, next) => {
//   res.render("auth/login", { message: req.flash("error") });
// });

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: "login error" });
    }
    if (!user) {
      return res.status(401).json({ message: info });
    }
    req.login(user, err => {
      if (err) {
        res.status(500), json({ message: "No se ha podido guardar sesión" });
        return;
      }
      return res.status(200).json(user);
    });
  })(req, res, next);
});

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  const phone = req.body.phone;
  const ubication = req.body.ubication;

  if (email === "" || password === "") {
    res.status(400).json({ message: "Introduce email y password" });
    return;
  }

  User.findOne({ email }, (err, user) => {
    if (err) {
      res
        .status(500)
        .json({ message: "Hay un error en tu email. Introdúcelo de nuevo" });
      return;
    }
    if (user) {
      res
        .status(400)
        .json({ message: "El email ya existe. Introduce otro o haz login" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      email: email,
      password: hashPass,
      name: name,
      phone: phone,
      ubication: ubication
    });

    newUser.save(err => {
      if (err) {
        res
          .status(400)
          .json({ message: "Fallo al guardar los datos en la BBDD" });
        return;
      }
      req.login(newUser, err => {
        if (err) {
          res.status(500).json({ message: "Inicio de sesión fallido" });
          return;
        }
        res.status(200).json(newUser);
      });
    });
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
