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
  console.log("desde cart repositories linea 21");
  const cart = await Cart.findOne({
    where: {
      userId,
    },
  });
  const cartId = cart.id;
  console.log(
    `El valor de cartId es ${cartId} en la linea 28 de cart repositories`
  );
  return cartId;
};

const checkout = async (cartId) => {
  console.log("entrando al cart repositories linea 35");
  const cart = await Cart.update(
    { totalPrice: 0.0 },
    { where: { id: cartId } }
  );
  console.log("se ha puesto a cero el total del carro en linea 40");
};

module.exports = { createCart, updateCartTotalPrice, checkout, findCartId };
