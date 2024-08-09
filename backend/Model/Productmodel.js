const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productname: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
  createdAt: { 
    type: Date, 
    default: Date.now() 
  },
  status: { 
    type: Boolean,
     default: 1 
    },
});

module.exports = new mongoose.model("product", productSchema);
