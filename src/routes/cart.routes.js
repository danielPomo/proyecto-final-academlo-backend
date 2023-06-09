const { Router } = require("express");
const router = Router();

const {
  addProductToCart,
  getProductsInCart,
} = require("../controllers/cart.controllers");

const {
  addProductToCartValidator,
  getProductsInCartValidator,
} = require("../validators/cart.validators");

const authenticate = require("../middlewares/authentication.middleware");

router.post(
  "/carts/:cartId/products",
  authenticate,
  addProductToCartValidator,
  addProductToCart
);
router.get(
  "/carts/:cartId/products",
  authenticate,
  getProductsInCartValidator,
  getProductsInCart
);

module.exports = router;
