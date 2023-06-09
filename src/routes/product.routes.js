const { Router } = require("express");
const router = Router();

const {
  createProduct,
  editProduct,
  getAvailableProducts,
} = require("../controllers/product.controllers");

const {
  createProductValidator,
  editProductValidator,
} = require("../validators/product.validator");

const authenticate = require("../middlewares/authentication.middleware");

router.post("/products", authenticate, createProductValidator, createProduct);

router.put(
  "/products/:id/description",
  authenticate,
  editProductValidator,
  editProduct
);
router.get("/products/available", getAvailableProducts);

module.exports = router;
