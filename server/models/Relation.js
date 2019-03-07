const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const relationSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    profesional: { type: Schema.Types.ObjectId, ref: "Profesional" }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Relation = mongoose.model("Relation", relationSchema);
module.exports = Relation;
