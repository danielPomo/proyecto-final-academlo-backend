const { Order, User, Cart } = require("../models");

const createOrder = async (userId) => {
  const cart = await Cart.findByPk(userId);
  const cartPrice = cart.totalPrice;
  const order = await Order.create({
    userId,
    totalPrice: cartPrice,
  });
  const orderInfo = await Order.findByPk(order.id, {
    include: {
      model: User,
      include: {
        model: Cart,
      },
    },
  });
  return orderInfo;
};

const getAllOrdersByUser = async (userId) => {
  const orders = await Order.findAll({
    where: {
      userId,
    },
  });
  return orders;
};

const setOrderStatusAsCompleted = async (orderId) => {
  await Order.update(
    { status: "completed" },
    {
      where: {
        id: orderId,
      },
    }
  );
};

module.exports = { createOrder, getAllOrdersByUser, setOrderStatusAsCompleted };
