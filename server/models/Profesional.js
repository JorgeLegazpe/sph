const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const proSchema = new Schema(
  {
    empresa: String,
    name: String,
    email: String,
    password: String,
    phone: Number,
    ubication: String,
    rol: String,
    typePro: {
      type: String,
      enum: [
        "cristalero",
        "fontanero",
        "electricista",
        "carpintero",
        "albañil",
        "pintor"
      ]
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Pro = mongoose.model("Profesional", proSchema);
module.exports = Pro;
