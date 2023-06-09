const { Router } = require("express");
const router = Router();
const {
  createOrderWhenPurchasingCart,
  getAllOrdersByUser,
  checkOut,
} = require("../controllers/order.controllers");

const {
  createOrderWhenPurchasingCartValidator,
  getAllOrdersByUserValidator,
  checkOutValidator,
} = require("../validators/order.validators");

const authenticate = require("../middlewares/authentication.middleware");

router.post(
  "/orders/users/:userId",
  authenticate,
  createOrderWhenPurchasingCartValidator,
  createOrderWhenPurchasingCart
);

router.get(
  "/orders/users/:userId",
  authenticate,
  getAllOrdersByUserValidator,
  getAllOrdersByUser
);

router.put("/orders/users/:userId", authenticate, checkOutValidator, checkOut);

module.exports = router;
