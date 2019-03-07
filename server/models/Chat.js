const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  title: String,
  description: String,
  profesional: { type: Schema.Types.ObjectId, ref: "Profesional" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  messages: []
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
