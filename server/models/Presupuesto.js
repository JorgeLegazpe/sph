const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const presupuestoSchema = new Schema(
  {
    messages: [
      {
        sender: { type: Schema.Types.ObjectId, ref: "Pro" },
        price: Number,
        message: String,
        creation: { type: Date, default: Date.now }
      }
    ],
    request: {
      type: String,
      default: "Pending",
      enum: ["Pending", "Delivered", "Received"]
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Presupuesto = mongoose.model("Presupuesto", presupuestoSchema);
module.exports = Presupuesto;
