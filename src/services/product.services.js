const {
  createProduct,
  editProduct,
  getAvailableProducts,
} = require("../repositories/product.repositories");

class ProductServices {
  static async createNewProduct({
    name,
    description,
    price,
    availableQty,
    userId,
    productImage,
  }) {
    try {
      return createProduct({
        name,
        description,
        price,
        availableQty,
        userId,
        productImage,
      });
    } catch (error) {
      throw error;
    }
  }

  static async editProductInfo({
    id,
    name,
    description,
    price,
    status,
    productImage,
    availableQty,
  }) {
    try {
      return editProduct({
        id,
        name,
        description,
        price,
        status,
        productImage,
        availableQty,
      });
    } catch (error) {
      throw error;
    }
  }

  static async getProductsInStock() {
    try {
      return getAvailableProducts();
    } catch (error) {}
  }
}

module.exports = ProductServices;
