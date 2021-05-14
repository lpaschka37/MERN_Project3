const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/onlineproducts');

const userSeed = [
  {
    name: 'Luke Paschka-clone',
    email: 'lpaschka@emaildomain.com',
    password: '',
    age: '45',
  },
  {
    name: 'Nathan Hentges-clone',
    email: 'nhentges@emaildomain.com',
    password: '',
    age: '21',
  },
  {
    name: 'Saranya Dayalan-clone',
    email: 'sdayalan@emaildomain.com',
    password: '',
    age: '30',
  },
  {
    name: 'Kelsey L-clone',
    email: 'kl@emaildomain.com',
    password: '',
    age: '30',
  },
  {
    name: 'John Doe',
    email: 'jodoe@emaildomain.com',
    password: '',
    age: '30',
  },
  {
    name: 'Jane Doe',
    email: 'jadoe@emaildomain.com',
    password: '',
    age: '30',
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
