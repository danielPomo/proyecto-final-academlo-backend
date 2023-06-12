const { ProductInCart, Cart, Order } = require("../models");
const { Op } = require("sequelize");

const getOneProduct = (productId, cartId) => {
  const product = ProductInCart.findOne({
    where: {
      productId,
      cartId,
    },
  });
  return product;
};

const addProduct = (product) => {
  const productCreated = ProductInCart.create(product);
  return productCreated;
};

const updateQty = (productId) => {
  const product = ProductInCart.increment(
    {
      qty: 1,
    },
    {
      where: { productId },
    }
  );
  return product;
};

const getProductsInCart = async (cartId) => {
  const productsInCart = await ProductInCart.findAll({
    where: {
      [Op.and]: [{ cartId: cartId }, { status: "not purchased" }],
    },
  });
  return productsInCart;
};

const selectProductsToMoveToProductsInOrder = async (cartId) => {
  const productsToMove = await getProductsInCart(cartId);
  return productsToMove;
};

const setProductStatusAsPurchased = async (orderId) => {
  const order = await Order.findOne({
    where: {
      id: orderId,
    },
  });
  const userId = order.userId;
  const cart = await Cart.findOne({
    where: {
      userId,
    },
  });
  const cartId = cart.id;
  await ProductInCart.update(
    { status: "purchased" },
    {
      where: {
        cartId,
      },
    }
  );
  return userId;
};

module.exports = {
  getOneProduct,
  addProduct,
  updateQty,
  getProductsInCart,
  selectProductsToMoveToProductsInOrder,
  setProductStatusAsPurchased,
};
