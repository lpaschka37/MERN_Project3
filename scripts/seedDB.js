const mongoose = require("mongoose");
const db = require("../models/products");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/onlineproducts"
);

const userSeed = [
  {
    name: "Luke Paschka",
    email: "lpaschka@emaildomain.com",
    age: "45",
    role: "Student"
  },
  {
    name: "Johnny Test",
    email: "jtest@emaildomain.com",
    age: "15",
    role: "Child"
  },
  {
    name: "Kristin Paschka",
    email: "kpaschka@emaildomain.com",
    age: "40",
    role: "My Wife"
  },
  {
    name: "Austen Staydohar",
    email: "astaydohar@emaildomain.com",
    age: "25",
    role: "Son"
  },
  {
    name: "Zoey Paschka",
    email: "zpaschka@emaildomain.com",
    age: "19",
    role: "Daughter"
  },
  {
    name: "Tera Cunninham",
    email: "tcunningham@emaildomain.com",
    age: "19",
    role: "Student"
  },
  {
    name: "Tegan Cunningham",
    email: "tgcunningham@emaildomain.com",
    age: "14",
    role: "Student"
  },
  {
    name: "This Guy",
    email: "tguy@emaildomain.com",
    age: "28",
    role: "Superviser"
  },
  {
    name: "Deb Borah",
    email: "dborah@emaildomain.com",
    age: "38",
    role: "Student"
  },
  {
    name: "Luke Paschka",
    email: "lpaschka@emaildomain.com",
    age: "45",
    role: "My Twin"
  },
];

// db.User
//   .remove({})
//   .then(() => db.User.collection.insertMany(userSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
