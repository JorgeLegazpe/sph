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

function queRol(email) {
  return User.find({
    email
  })
    .then(user =>
      user.length == 0
        ? Pro.find({
            email
          })
        : "user"
    )
    .then(rol => (rol === "user" ? "user" : "pro"))
    .catch(err => err);
}

router.post("/login", (req, res, next) => {
  queRol(req.body.email)
    .then(rol => {
      passport.authenticate(rol, (err, user, info) => {
        if (err) {
          return res.status(500).json({ message: "login error" });
        }
        if (!user) {
          return res.status(401).json({ message: info });
        }
        req.login(user, err => {
          if (err) {
            res.status(500),
              json({ message: "No se ha podido guardar sesión" });
            return;
          }
          return res.status(200).json(user);
        });
      })(req, res, next);
    })
    .catch(err => err);
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
      ubication: ubication,
      rol: "user"
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

router.post("/signupPro", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const empresa = req.body.empresa;
  const name = req.body.name;
  const phone = req.body.phone;
  const ubication = req.body.ubication;
  const typePro = req.body.typePro;

  if (email === "" || password === "") {
    res.status(400).json({ message: "Introduce email y password" });
    return;
  }

  Pro.findOne({ email }, (err, user) => {
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

    const newPro = new Pro({
      email: email,
      password: hashPass,
      name: name,
      phone: phone,
      ubication: ubication,
      empresa: empresa,
      typePro: typePro,
      rol: "Pro"
    });

    newPro.save(err => {
      if (err) {
        res
          .status(400)
          .json({ message: "Fallo al guardar los datos en la BBDD" });
        return;
      }
      req.login(newPro, err => {
        if (err) {
          res.status(500).json({ message: "Inicio de sesión fallido" });
          return;
        }
        res.status(200).json(newPro);
      });
    });
  });
});

router.get("/logout", (req, res, next) => {
  req.logout();
  res.status(200).json({ message: "Log out success!" });
});

router.get("/loggedin", (req, res, next) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: "Unauthorized" });
});

module.exports = router;
