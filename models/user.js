const mongoose = require('mongoose');

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: String, required: true },
  role: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
