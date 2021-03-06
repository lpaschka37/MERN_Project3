const router = require("express").Router();
const productsController = require("../../controllers/productsController");

// Matches with "/api/products"
router
  .route("/")
  .get(productsController.findAll)
  .post(productsController.create);

// Matches with "/api/products/:id"
// router
//   .route("/:id")
//   .get(productsController.findById)
//   .put(productsController.update)
//   .delete(productsController.remove);

// Matches with "/api/products/:id"
router.route("/:id").get(productsController.findById);

// Matches with "/api/products/:category"
router.route("/category/:category").get(productsController.findByCategory);

// Matches with "/api/product/ratings/:id"
router.route("/ratings/:id").post(productsController.updateRating);

module.exports = router;
