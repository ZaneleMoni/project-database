const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required:true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required:true
  },
  created_by:{
    type: Number,
    required: true
  }
});
module.exports = mongoose.model("Product", productSchema);