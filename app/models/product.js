const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
  
  title: {
    type: String,
    required: [true, "Please include the product name"],
  },
  price: {
    type: String,
    required: [true, "Please include the product price"],
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required:true
  },
  createDate:{
    type: Date,
    required: true,
    default: Date.now
  }
});
module.exports = mongoose.model("Product", productSchema);