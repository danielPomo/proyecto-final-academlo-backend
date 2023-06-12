const {
  createCart,
  updateCartTotalPrice,
} = require("../repositories/cart.repositories");
const {
  getOneProduct,
  addProduct,
  updateQty,
  getProductsInCart,
} = require("../repositories/productincart.repositories");

class CartServices {
  static async createNewCart(userId) {
    try {
      return createCart(userId);
    } catch (error) {
      throw error;
    }
  }

  static async addNewProduct(data) {
    try {
      const product = await getOneProduct(data.productId, data.cartId);
      await updateCartTotalPrice(data.price, data.cartId);
      if (!product) {
        return await addProduct(data);
      }
      return await updateQty(data.productId);
    } catch (error) {
      throw error;
    }
  }

  static async getAllProductsInCart(cartId) {
    try {
      return getProductsInCart(cartId);
    } catch (error) {}
  }
}

module.exports = CartServices;
