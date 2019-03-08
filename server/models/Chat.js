const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");
const Profesional = require("./Profesional");

const chatSchema = new Schema({
  title: String,
  description: String,
  user: { type: Schema.Types.ObjectId, ref: "User" },
  profesional: { type: Schema.Types.ObjectId, ref: "Profesional" }
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
