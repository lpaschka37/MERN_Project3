const mongoose = require("mongoose");
// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: false
  },
  address: {
    type: String,
    required: false
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
