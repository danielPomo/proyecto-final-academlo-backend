"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductInCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductInCart.init(
    {
      cartId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
      price: DataTypes.REAL,
      status: DataTypes.ENUM("purchased", "not purchased"),
    },
    {
      sequelize,
      modelName: "ProductInCart",
      tableName: "productsInCarts",
    }
  );
  return ProductInCart;
};
