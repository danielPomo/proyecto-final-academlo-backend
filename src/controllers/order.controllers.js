const OrderServices = require("../services/order.services");

const createOrderWhenPurchasingCart = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const order = await OrderServices.createNewOrder(userId);
    const cartId = order.User.Cart.id;
    const productsToMove = await OrderServices.selectProductsToMove(cartId);
    const normalizedProductsToMove =
      await OrderServices.moveProductsToProductInOrder(
        order.id,
        productsToMove
      );
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};

const checkOut = async (req, res, next) => {
  try {
    const { orderId } = req.params;
    await OrderServices.updateProductAvailableQty(orderId);
    const userId = await OrderServices.setProductAsPurchased(orderId);
    await OrderServices.buyCart(userId);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

const getAllOrdersByUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const allOrdersByUser = await OrderServices.getAllOrders(userId);
    res.json(allOrdersByUser);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createOrderWhenPurchasingCart,
  getAllOrdersByUser,
  checkOut,
};
