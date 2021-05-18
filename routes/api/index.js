const router = require("express").Router();
const userRoutes = require("./users");
const productRoutes = require("./products");

// User & product routes
router.use("/users", userRoutes);
router.use("/products", productRoutes);

module.exports = router;
