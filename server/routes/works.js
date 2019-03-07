const express = require("express");
const works = express.Router();
const User = require("../models/User");
const Pro = require("../models/Profesional");

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
  Relation.create({
    user: req.body.idUser,
    profesional: req.body.idPro
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

works.get("/perfilpro", (req, res, next) => {
  Relation.find()
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

works.get("/perfiluser", (req, res, next) => {
  Relation.find()
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = works;
