const CartServices = require("../services/cart.services");

const addProductToCart = async (req, res, next) => {
  try {
    const { productId, price, qty } = req.body;
    const { cartId } = req.params;
    console.log("entrando al controlador");
    await CartServices.addNewProduct({ cartId, productId, price, qty });
    console.log("saliendo del controlador");
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

const getProductsInCart = async (req, res, next) => {
  try {
    console.log("2023");
    const { cartId } = req.params;
    console.log(cartId);
    const productsInCart = await CartServices.getAllProductsInCart(cartId);
    console.log("2024");
    res.json(productsInCart);
  } catch (error) {
    next(error);
  }
};

module.exports = { addProductToCart, getProductsInCart };
