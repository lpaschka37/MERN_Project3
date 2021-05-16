const mongoose = require("mongoose");
const db = require("../models");

// Still working on seed files
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/onlineproducts"
);

const productsSeed = [
  {
    productImage: "queso.png",
    productName: "Queso",
    description: "K, sooo, this is just a gooey mixture of cheese and peppers.",    
    price: 2.49,
    seller: "Garyphanalia",
    rating: 5,
    category: "Food"
  }
];

db.Products
  .remove({})
  .then(() => db.Book.collection.insertMany(productsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


  // Products (sortable):
// product image
// product name
// description
// price
// category
// rating/review
// seller