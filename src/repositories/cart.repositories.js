const { Cart } = require("../models");

const createCart = async (userId) => {
  const cart = await Cart.create({ userId });
  return cart;
};

const updateCartTotalPrice = async (price, id) => {
  const cart = await Cart.increment(
    { totalPrice: price },
    {
      where: {
        id,
      },
    }
  );
  return cart;
};

const findCartId = async (userId) => {
  const cart = await Cart.findOne({
    where: {
      userId,
    },
  });
  const cartId = cart.id;
  return cartId;
};

const checkout = async (cartId) => {
  const cart = await Cart.update(
    { totalPrice: 0.0 },
    { where: { id: cartId } }
  );
};

module.exports = { createCart, updateCartTotalPrice, checkout, findCartId };
