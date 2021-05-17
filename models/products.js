const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  
  productImage: { 
    type: String, 
    default: "" 
  },
  productName: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  price: { 
    type: Number, 
    required: true 
  },
  seller: { 
    type: String, 
    required: true 
  },
  rating: { 
    type: Number, 
    required: true 
  },
  category: {
    type: String,
    required: true
  }
});

const Products = mongoose.model("Products", productSchema);

module.exports = Products;



//testing to push
