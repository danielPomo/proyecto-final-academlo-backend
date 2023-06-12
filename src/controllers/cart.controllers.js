const CartServices = require("../services/cart.services");

const addProductToCart = async (req, res, next) => {
  try {
    const { productId, price, qty } = req.body;
    const { cartId } = req.params;
    await CartServices.addNewProduct({ cartId, productId, price, qty });
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

const getProductsInCart = async (req, res, next) => {
  try {
    const { cartId } = req.params;
    const productsInCart = await CartServices.getAllProductsInCart(cartId);
    res.status(200).json(productsInCart);
  } catch (error) {
    next(error);
  }
};

module.exports = { addProductToCart, getProductsInCart };
