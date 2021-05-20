const db = require("../models");

// Defining methods for the productsController
module.exports = {
  findAll(req, res) {
    console.log("find all...");
    db.Products.find()
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById(req, res) {
    db.Products.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByCategory(req, res) {
    db.Products.find({ category: req.params.category })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create(req, res) {
    db.Products.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update(req, res) {
    db.Products.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  updateRating(req, res) {
    console.log("Rating...", req.body);
    db.Products.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { ratings: req.body } },
      { new: true }
    )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove(req, res) {
    db.Products.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
