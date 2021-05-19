const mongoose = require("mongoose");
const db = require("../models");

// Still working on seed files
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/onlineproducts"
);

const productsSeed = [
  {
    productImage: "light.png",
    productName: "A light",
    description: "For all your bright ideas",    
    price: 22.99,
    seller: "Garyphanalia",
    rating: 4,
    category: "G-things"
  }, 
  {
    productImage: "outhouse.png",
    productName: "Portable Lavaratory",
    description: "Get business done fast with this efficient and space saving carry anywhere potty",    
    price: 1999.99,
    seller: "Garyphanalia",
    rating: 5,
    category: "G-things"
  }, 
  {
    productImage: "vinyl.png",
    productName: "Records",
    description: "Mystery Deal",    
    price: 3.14,
    seller: "luke",
    rating: 2,
    category: "Vinyl"
  }, 
  {
    productImage: "cheese-queso-dip.png",
    productName: "Queso Beso",
    description: "K, sooo, this is just a gooey mixture of cheese and peppers.",    
    price: 14.49,
    seller: "Garyphanalia",
    rating: 5,
    category: "G-things"
  }, 
  {
    productImage: "quesoing.png",
    productName: "Queso",
    description: "K, sooo, this is just a gooey mixture of cheese and peppers.",
    price: 2.49,
    seller: "Garyphanalia",
    rating: 5,
    category: "G-things",
  },
  {
    productImage: "scoville.png",
    productName: "Scoville",
    description: "A plunge into a pepper planters plan, strategize your field to win the chili contest!",    
    price: 62.00,
    seller: "nathan",
    rating: 5,
    category: "Games"
  }, 
  {
    productImage: "dragonsthree.png",
    productName: "Dragon's Gold",
    description: "Slay Dragons! Get Gold! From Bruno Faidutti, the award-winning designer of Citadels, comes a killer game of negotiation and fantastical proportions!",    
    price: 16.98,
    seller: "nathan",
    rating: 5,
    category: "Games"
  }, 
  {
    productImage: "alhambra.png",
    productName: "Alhambra",
    description: "Alhambra is a 2003 tile-based German-style board game designed by Dirk Henn.",    
    price: 40.50,
    seller: "nathan",
    rating: 4,
    category: "Games"
  }, 
  {
    productImage: "tacocat.png",
    productName: "TacoCat",
    description: "A lil’ board game with a cat who is also a taco. With Tacocat on the line, anything can happen in this palindrome-powered tug-of-war!",    
    price: 15.00,
    seller: "nathan",
    rating: 5,
    category: "Games"
  }, 

  {
    productImage: "sixtyplate.png",
    productName:  "Vintage Dude",
    description: "The man, the myth, and the legend, can all dine in style",
    price: 2.00,
    seller: "saranya",
    rating: 5,
    category: "Party Supplies",
  },
  {
    productImage: "goodbye.png",
    productName:  "Goodbye Yellow Brick Road by Elton John",
    description: "Sir Elton’s best offering is a majestic piece of piano pop and glam rock gold",
    price: 28.00,
    seller: "Luke",
    rating: 5,
    category: "Vinyl",
  },
  {
    productImage: "darkside.png",
    productName:  "The Dark Side of the Moon by Pink Floyd",
    description: "An all-time great, this album has become embedded in our cultural fabric. Musically, it’s groundbreaking, flexing uncharted studio prowess.",
    price: 38.00,
    seller: "Luke",
    rating: 5,
    category: "Vinyl",
  },
  {
    productImage: "princeblack.png",
    productName:  "The Black Album by Prince",
    description: "This one always shows up if you’re browsing the web for the most valuable vinyl record. ",
    price: 325.00,
    seller: "Luke",
    rating: 5,
    category: "Vinyl"
  },
  {
    productImage: "blackstar.png",
    productName:  " Black Star by David Bowie",
    description: "Bowie’s discography is marvelous from start to finish but there’s something both glorious and haunting about his final work.",
    price: 31.00,
    seller: "Luke",
    rating: 5,
    category: "Vinyl",
  },
  {
    productImage: "pinata.png",
    productName:  "Pinata",
    description: "Perfect activity for any age celebration",
    price: 10.00,
    seller: "Saranya",
    rating: 4,
    category: "Party Supplies",
  },
  {
    productImage: "curls.png",
    productName:  "String Curls",
    description: "For any celebration",
    price: 5.00,
    seller: "Saranya",
    rating: 4,
    category: "Party Supplies",
  },
  {
    productImage: "twentyone.png",
    productName: "Graduation hats 2021",
    description:
      "A graduation hats for 2021.Add a special touch to the graduation celebration",
    price: 10.00,
    seller: "Saranya",
    rating: 3,
    category: "Party Supplies",
  },
  {
    productImage: "balloonz.png",
    productName: "Balloons ",
    description:
      "Personalize your next big event with the Spritz Number 0 floating helium balloon",
    price: 5.00,
    seller: "Saranya",
    rating: 3,
    category: "Party Supplies",
  },
  {
    productImage: "sixtieth.png",
    productName: "Number Balloons",
    description:
      "Personalize your next big event with the Spritz Number 0 floating helium balloon",
    price: 5.00,
    seller: "Saranya",
    rating: 3,
    category: "Party Supplies",
  },
  {
    productImage: "sixtypop.png",
    productName: "Number Balloons",
    description: "Personalize your next big event with numbered floating helium balloon",    
    price: 5.00,
    seller: "Saranya",
    rating: 4,
    category: "Party supplies"
  },
  {
    productImage: "hatmaskcake.png",
    productName: " Rotating cake with party hats",
    description: " Magic spin birthday cake with hats and masks",
    price: 15.00,
    seller: "Saranya",
    rating: 4,
    category: "Party Supplies",
  },
];

db.Products.remove({})
  .then(() => db.Products.collection.insertMany(productsSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
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
  },
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// Users:
// username
// password
// email
// phone
// address
