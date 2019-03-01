const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactoSchema = new Schema(
  {
    sender: { type: Schema.Types.ObjectId, ref: "User" },
    message: String,
    creation: { type: Date, default: Date.now }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Contacto = mongoose.model("Contacto", contactoSchema);
module.exports = Contacto;
