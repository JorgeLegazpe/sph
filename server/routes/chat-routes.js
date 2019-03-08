const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const Task = require("../models/task-model");
const Project = require("../models/project-model");

// POST route => to create a new task
router.post("/chat", (req, res, next) => {
  Task.create({
    title: req.body.title,
    description: req.body.description
  })
    .then(response => {
      Project.findByIdAndUpdate(req.body.projectID, {
        $push: { tasks: response._id }
      })
        .then(theResponse => {
          res.json(theResponse);
        })
        .catch(err => {
          res.json(err);
        });
    })
    .catch(err => {
      res.json(err);
    });
});

// PUT route => to update a specific task
router.put("/chat/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Task.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({
        message: `Task with ${req.params.id} is updated successfully.`
      });
    })
    .catch(err => {
      res.json(err);
    });
});
