const express = require("express");
const mongoose = require("mongoose");

const chatRoutes = express.Router();
const Chat = require("../models/Chat");

chatRoutes.post("/chat", (req, res, next) => {
  Chat.create({
    title: req.body.title,
    description: req.body.description,
    profesional: req.body.profesional,
    user: req.body.user
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

chatRoutes.put("/chat/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "El chat no es válido" });
    return;
  }
  Chat.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({ message: "Mensaje actualizado" });
    })
    .catch(err => {
      res.json(err);
    });
});

chatRoutes.get("/chat/:id", (req, res, next) => {
  Chat.findById(req.params.id)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = chatRoutes;
