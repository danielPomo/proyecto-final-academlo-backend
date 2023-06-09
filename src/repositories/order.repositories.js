const { Order, User, Cart } = require("../models");

const createOrder = async (data) => {
  const order = await Order.create(data);
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
  console.log("donald");
  const orders = await Order.findAll({
    where: {
      userId,
    },
  });
  console.log("el user id es" + userId);
  console.log(orders);
  return orders;
};

module.exports = { createOrder, getAllOrdersByUser };
