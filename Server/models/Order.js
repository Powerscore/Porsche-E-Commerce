import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
  customerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  ],
  total: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

export const order = mongoose.model("Order", OrderSchema);
