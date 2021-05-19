const mongoose = require("mongoose");
// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

const productSchema = new Schema({
productImage: {
  type: String,
  required: true
    },
  productName: { 
    type: String,
     required: true
     },
  description: String,
  rating: Number,
  price: Number,
  seller: String,
  category: {
    type: String, 
    required: true
  },
});

const products = mongoose.model("products", productSchema);

module.exports = products;

// testing to push


