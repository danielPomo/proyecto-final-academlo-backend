const { ProductInCart, Cart } = require("../models");
const { Op } = require("sequelize");

const getOneProduct = (productId, cartId) => {
  console.log("entrando al productInCart repo");
  const product = ProductInCart.findOne({
    where: {
      productId,
      cartId,
    },
  });
  console.log(product);
  console.log("saliendo del productInCart repo");
  return product;
};

const addProduct = (product) => {
  console.log("entrado al repo de addProduct");
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
  console.log("2026");
  const productsInCart = await ProductInCart.findAll({
    where: {
      [Op.and]: [{ cartId: cartId }, { status: "not purchased" }],
    },
  });
  console.log("2027");
  console.log(productsInCart);
  return productsInCart;
};

const selectProductsToMoveToProductsInOrder = async (cartId) => {
  console.log("product in cart repository linea 47");
  const productsToMove = await getProductsInCart(cartId);
  console.log("product in cart repository linea 49");
  console.log(productsToMove);
  return productsToMove;
};

const setProductStatusAsPurchased = async (userId) => {
  console.log("desde products in carts repositories linea 56");
  const cart = await Cart.findOne({
    where: {
      userId,
    },
  });
  const cartId = cart.id;
  console.log(`El carrito recuperado tiene id ${cartId} en la linea 63`);
  await ProductInCart.update(
    { status: "purchased" },
    {
      where: {
        cartId,
      },
    }
  );
  console.log("al final de la fn setPurchased del repositorio linea 72");
};

module.exports = {
  getOneProduct,
  addProduct,
  updateQty,
  getProductsInCart,
  selectProductsToMoveToProductsInOrder,
  setProductStatusAsPurchased,
};
