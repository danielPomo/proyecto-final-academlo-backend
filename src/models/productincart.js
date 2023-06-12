"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductInCart extends Model {
    static associate(models) {}
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
