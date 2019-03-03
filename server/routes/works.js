const express = require("express");
const works = express.Router();
const User = require("../models/User");
const Pro = require("../models/Profesional");

works.get("/profesionales", (req, res, next) => {
  Pro.find()
    .then(response => {
      console.log(response);
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = works;
