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
  "/orders/user/:userId",
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

router.put("/orders/:orderId/users", authenticate, checkOutValidator, checkOut);

module.exports = router;
