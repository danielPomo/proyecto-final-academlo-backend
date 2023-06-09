const OrderServices = require("../services/order.services");

const createOrderWhenPurchasingCart = async (req, res, next) => {
  try {
    console.log("en order controller linea 5");
    const { userId } = req.params;
    const { totalPrice, status } = req.body;
    console.log(userId, status);
    console.log("en order controllers linea 9");
    const order = await OrderServices.createNewOrder({
      userId,
      totalPrice,
      status,
    });
    const cartId = order.User.Cart.id;
    // selecciona los productos a mandar del carrito a ProductsInOrders
    const productsToMove = await OrderServices.selectProductsToMove(cartId);
    console.log("order controller linea 19");
    // normaliza el registro de los productos a mover en  ProductsInOrder
    const normalizedProductsToMove =
      await OrderServices.moveProductsToProductInOrder(
        order.id,
        productsToMove
      );
    // cambiar el estado de los productos a purchased en productsIncarts
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};

const checkOut = async (req, res, next) => {
  try {
    const { userId } = req.params;
    console.log(`se capturo el userId ${userId}`);
    await OrderServices.setProductAsPurchased(userId);
    await OrderServices.buyCart(userId);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

const getAllOrdersByUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    console.log(userId);
    const allOrdersByUser = await OrderServices.getAllOrders(userId);
    console.log("mickey");
    res.json(allOrdersByUser);
    console.log("Respuesta");
    console.log(allOrdersByUser);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createOrderWhenPurchasingCart,
  getAllOrdersByUser,
  checkOut,
};
