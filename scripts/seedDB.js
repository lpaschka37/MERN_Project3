const mongoose = require("mongoose");
const db = require("../models");

// Still working on seed files
const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/onlineproducts",
  config
);

const productsSeed = [
  {
    productImage: "light.png",
    productName: "A light",
    description: "For all your bright ideas",
    price: 22.99,
    seller: "Garyphanalia",
    ratings: [
      {
        rate: 3,
      },
      {
        rate: 4,
      },
      {
        rate: 5,
      },
      {
        rate: 1,
      },
      {
        rate: 5,
      },
      {
        rate: 3,
      },
    ],
    category: "Gare Wares",
  },
  {
    productImage: "outhouse.png",
    productName: "Portable Lavaratory",
    description:
      "Get business done fast with this efficient and space saving carry anywhere potty",
    price: 1999.99,
    seller: "Garyphanalia",
    ratings: [],
    category: "Gare Wares",
  },
  {
    productImage: "cheese-queso-dip.png",
    productName: "Queso Beso",
    description: "K, sooo, this is just a gooey mixture of cheese and peppers.",
    price: 14.49,
    seller: "Garyphanalia",
    ratings: [],
    category: "Gare Wares",
  },
  {
    productImage: "quesoing.png",
    productName: "Queso",
    description: "K, sooo, this is just a gooey mixture of cheese and peppers.",
    price: 2.49,
    seller: "Garyphanalia",
    ratings: [],
    category: "Gare Wares",
  },
  {
    productImage: "scoville.png",
    productName: "Scoville",
    description:
      "A plunge into a pepper planters plan, strategize your field to win the chili contest!",
    price: 62.0,
    seller: "nathan",
    ratings: [],
    category: "Board Games",
  },
  {
    productImage: "dragonsthree.png",
    productName: "Dragon's Gold",
    description:
      "Slay Dragons! Get Gold! From Bruno Faidutti, the award-winning designer of Citadels, comes a killer game of negotiation and fantastical proportions!",
    price: 16.98,
    seller: "nathan",
    ratings: [],
    category: "Board Games",
  },
  {
    productImage: "alhambra.png",
    productName: "Alhambra",
    description:
      "Alhambra is a 2003 tile-based German-style board game designed by Dirk Henn.",
    price: 40.5,
    seller: "nathan",
    ratings: [],
    category: "Board Games",
  },
  {
    productImage: "tacocat.png",
    productName: "TacoCat",
    description:
      "A lil’ board game with a cat who is also a taco. With Tacocat on the line, anything can happen in this palindrome-powered tug-of-war!",
    price: 15.0,
    seller: "nathan",
    ratings: [],
    category: "Board Games",
  },
  {
    productImage: "vinyl.png",
    productName: "Records",
    description: "Mystery Deal",
    price: 3.14,
    seller: "luke",
    ratings: [],
    category: "Vinyl",
  },
  {
    productImage: "sixtyplate.png",
    productName: "Vintage Dude",
    description: "The man, the myth, and the legend, can all dine in style",
    price: 2.0,
    seller: "saranya",
    ratings: [],
    category: "Vinyl",
  },
  {
    productImage: "goodbye.png",
    productName: "Goodbye Yellow Brick Road by Elton John",
    description:
      "Sir Elton’s best offering is a majestic piece of piano pop and glam rock gold",
    price: 28.0,
    seller: "Luke",
    ratings: [],
    category: "Vinyl",
  },
  {
    productImage: "darkside.png",
    productName: "The Dark Side of the Moon by Pink Floyd",
    description:
      "An all-time at, this album has become embedded in our cultural fabric. Musically, it’s groundbreaking, flexing uncharted studio prowess.",
    price: 38.0,
    seller: "Luke",
    ratings: [],
    category: "Vinyl",
  },
  {
    productImage: "princeblack.png",
    productName: "The Black Album by Prince",
    description:
      "This one always shows up if you’re browsing the web for the most valuable vinyl record. ",
    price: 325.0,
    seller: "Luke",
    ratings: [],
    category: "Vinyl",
  },
  {
    productImage: "blackstar.png",
    productName: " Black Star by David Bowie",
    description:
      "Bowie’s discography is marvelous from start to finish but there’s something both glorious and haunting about his final work.",
    price: 31.0,
    seller: "Luke",
    ratings: [],
    category: "Vinyl",
  },
  {
    productImage: "pinata.png",
    productName: "Pinata",
    description: "Perfect activity for any age celebration",
    price: 10.0,
    seller: "Saranya",
    ratings: [],
    category: "Party Supplies",
  },
  {
    productImage: "curls.png",
    productName: "String Curls",
    description: "For any celebration",
    price: 5.0,
    seller: "Saranya",
    ratings: [],
    category: "Party Supplies",
  },
  {
    productImage: "twentyone.png",
    productName: "Graduation hats 2021",
    description:
      "A graduation hats for 2021.Add a special touch to the graduation celebration",
    price: 10.0,
    seller: "Saranya",
    ratings: [],
    category: "Party Supplies",
  },
  {
    productImage: "balloons.png",
    productName: "Balloons ",
    description:
      "Personalize your next big event with the Spritz Number 0 floating helium balloon",
    price: 5.0,
    seller: "Saranya",
    ratings: [
      {
        rate: 2,
      },
      {
        rate: 3,
      },
      {
        rate: 5,
      },
      {
        rate: 5,
      },
      {
        rate: 5,
      },
      {
        rate: 5,
      },
    ],
    category: "Party Supplies",
  },
  {
    productImage: "sixtieth.png",
    productName: "Number Balloons",
    description:
      "Personalize your next big event with the Spritz Number 0 floating helium balloon",
    price: 5.0,
    seller: "Saranya",
    ratings: [
      {
        rate: 1,
      },
      {
        rate: 1,
      },
      {
        rate: 2,
      },
      {
        rate: 3,
      },
      {
        rate: 3,
      },
      {
        rate: 2,
      },
    ],
    category: "Party Supplies",
  },
 
  {
    productImage: "hatmaskcakes.png",
    productName: " Rotating cake with party hats",
    description: " Magic spin birthday cake with hats and masks",
    price: 15.0,
    seller: "Saranya",
    ratings: [],
    category: "Party Supplies",
  },
];

db.Products.remove({})
  .then(() => db.Products.collection.insertMany(productsSeed))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

const userSeed = [
  {
    username: "Luke Paschka",
    email: "lpaschka@emaildomain.com",
    password: "123456abc",
    phone: "763-555-5555",
    address: "1234 declarathumbwar dr, Minneapolis MN 55555",
  },
  {
    username: "Kelsie Lewis",
    email: "klewis@emaildomain.com",
    password: "123456abc",
    phone: "763-555-5555",
    address: "1234 declarathumbwar dr, Minneapolis MN 55555",
  },
  {
    username: "Nathan Henteges",
    email: "nhenteges@emaildomain.com",
    password: "123456abc",
    phone: "763-555-5555",
    address: "1234 declarathumbwar dr, Minneapolis MN 55555",
  },
  {
    username: "Saranya Dayalan",
    email: "sdayalan@emaildomain.com",
    password: "123456abc",
    phone: "763-555-5555",
    address: "1234 declarathumbwar dr, Minneapolis MN 55555",
  },
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
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
