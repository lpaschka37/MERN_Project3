const bcrypt = require("bcryptjs");
const db = require("../models");

// Defining methods for the userController
module.exports = {

  findAll(req, res) {
    db.User
      .find()
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  create(req, res) {
    db.User
      .findOne({ username: req.body.username })
      .then((user) => {
        if (user) {
          return res.json({ err: "Username already exists" });
        }
        bcrypt.hash(req.body.password, 10, (hashErr, hash) => {
          if (hashErr) throw hashErr;
          const newUser = new db.User({
            username: req.body.username,
            email: req.body.email,
            password: hash
          });
          newUser.save()
            .then((savedUser) => res.json(savedUser))
            .catch((err) => console.log(err));
        });
      });
  },

  login(req, res) {
    db.User
      .findOne({ username: req.body.username })
      .then((user) => {
        if (!user) {
          return res.json({ err: "No user with that username found" });
        }
        // Compare password hashes
        bcrypt.compare(req.body.password, user.password)
          .then((isMatch) => {
            if (isMatch) {
              res.json(user);
            } else {
              return res.json({ err: "Incorrect Password" });
            }
          });
      });
  },

  findById(req, res) {
    db.User
      .findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // create(req, res) {
  //   db.User
  //     .create(req.body)
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  update(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  }
};
