const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");
const Pro = require("../models/Profesional");

router.post("/perfiluser/message/:id", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  const phone = req.body.phone;
  const ubication = req.body.ubication;
});
