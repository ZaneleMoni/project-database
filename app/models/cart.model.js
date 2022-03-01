const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, 'Quantity can not be less than one']
  },
  price: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true,
  }
}, {
  timestamps:true
})


module.exports = mongoose.model("Cart", cartSchema);
