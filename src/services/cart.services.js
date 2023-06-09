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
      console.log("entrando al cart services");
      // verificar si el producto ya existe en el carro
      const product = await getOneProduct(data.productId, data.cartId);
      await updateCartTotalPrice(data.price, data.cartId);
      console.log("despues de verificar si el producto está en el carro");
      console.log(product);
      // si no existe lo creo
      if (!product) {
        console.log("el producto no esta en el carro");
        return await addProduct(data);
      }
      // si ya existe, busco el producto donde el id sea el del producto que me estan proporcionando, modifico la cantidad en 1 en la tabla pivote
      console.log("el producto ya esta en el carro");
      return await updateQty(data.productId);
    } catch (error) {
      throw error;
    }
  }

  static async getAllProductsInCart(cartId) {
    try {
      console.log("2025");
      return getProductsInCart(cartId);
    } catch (error) {}
  }
}

module.exports = CartServices;
