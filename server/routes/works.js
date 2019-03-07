const express = require("express");
const works = express.Router();
const User = require("../models/User");
const Pro = require("../models/Profesional");
const Relation = require("../models/Relation");

works.get("/profesionales", (req, res, next) => {
  Pro.find()
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

works.post("/profesionales", (req, res, next) => {
  let { user, profesional } = req.body;
  let newUser = new Relation({ user, profesional });

  newUser
    .save()
    .then(newUser => {
      res.json(newUser);
    })
    .catch(err => err);
});

works.get("/perfilpro/:id", (req, res, next) => {
  Relation.find({ profesional: req.params.id })
    .populate("user")
    .then(response => {
      console.log("users");
      console.log(response);
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

works.get("/perfiluser/:id", (req, res, next) => {
  Relation.find({ user: req.params.id })
    .populate("profesional")
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = works;
