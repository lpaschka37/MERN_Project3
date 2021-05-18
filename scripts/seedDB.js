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
  }, 
  {
    productImage: "twentyone.png",
    productName:  "Vintage Dude",
    description: "The man the myth and the legend can all dine in style",
    price: 2.00,
    seller: "saranya",
    rating: 5,
    category: "Party Supplies"
  },
  {
    productImage: "oilshop.png",
    productName:  "Goodbye Yellow Brick Road by Elton John",
    description: "Sir Elton’s best offering is a majestic piece of piano pop and glam rock gold",
    price: 28.00,
    seller: "Luke",
    rating: 5,
    category: "Vinyl"
  },
  {
    productImage: "twentyone.png",
    productName:  "The Dark Side of the Moon by Pink Floyd",
    description: "An all-time great, this album has become embedded in our cultural fabric. Musically, it’s groundbreaking, flexing uncharted studio prowess.",
    price: 38.00,
    seller: "Luke",
    rating: 5,
    category: "Vinyl"
  },
  {
    productImage: "twentyone.png",
    productName:  "The Black Album by Prince",
    description: "This one always shows up if you’re browsing the web for the most valuable vinyl record. ",
    price: 325.00,
    seller: "Luke",
    rating: 5,
    category: "Party Supplies"
  },
  {
    productImage: "twentyone.png",
    productName:  " Black Star by David Bowie",
    description: "Bowie’s discography is marvelous from start to finish but there’s something both glorious and haunting about his final work.",
    price: 31.00,
    seller: "Luke",
    rating: 5,
    category: "Vinyl"
  },
  {
    productImage: "twentyone.png",
    productName:  "Pinata",
    description: "Perfect activity for any age celebration",
    price: 10.00,
    seller: "Saranya",
    rating: 4,
    category: "Party Supplies"
  },
  {
    productImage: "twentyone.png",
    productName:  "String Curls",
    description: "For any celebration",
    price: 5.00,
    seller: "Saranya",
    rating: 4,
    category: "Party Supplies"
  },
  {
    productImage: "twentyone.png",
    productName:  "Graduation hats 2021",
    description: "A graduation hats for 2021.Add a special touch to the graduation celebration",
    price: 10.00,
    seller: "Saranya",
    rating: 3,
    category: "Party Supplies"
  },
  {
    productImage: "balloons.png",
    productName: "Balloons ",
    description: "Personalize your next big event with the Spritz Number 0 floating helium balloon",
    price: 5.00,
    seller: "Saranya",
    rating: 3,
    category: "Party Supplies"
  },
  {
    productImage: "sixtieth.png",
    productName: "Number Balloons",
    description: "Personalize your next big event with the Spritz Number 0 floating helium balloon",    
    price: 5.00,
    seller: "Saranya",
    rating: 3,
    category: "Party supplies"
  },
  {
    productImage: "hatmaskcake.png",
    productName: " Rotating cake with party hats",
    description: " Magic spin birthday cake with hats and masks",    
    price: 15.00,
    seller: "Saranya",
    rating: 4,
    category: "Party supplies"
  }
];

db.Products
  .remove({})
  .then(() => db.Products.collection.insertMany(productsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


const userSeed = [
  {
    name: "Luke Paschka",
    email: "lpaschka@emaildomain.com",
    password: "123456abc",
    phone: "763-555-5555",
    address: "1234 declarathumbwar dr, Minneapolis MN 55555",
  },
  {
    name: "Kelsie Lewis",
    email: "klewis@emaildomain.com",
    password: "123456abc",
    phone: "763-555-5555",
    address: "1234 declarathumbwar dr, Minneapolis MN 55555",
  },
  {
    name: "Nathan Henteges",
    email: "nhenteges@emaildomain.com",
    password: "123456abc",
    phone: "763-555-5555",
    address: "1234 declarathumbwar dr, Minneapolis MN 55555",
  },
  {
    name: "Saranya Dayalan",
    email: "sdayalan@emaildomain.com",
    password: "123456abc",
    phone: "763-555-5555",
    address: "1234 declarathumbwar dr, Minneapolis MN 55555",
  }

];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


// Users:
// username
// password
// email
// phone
// address


