"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductInOrder extends Model {
    static associate(models) {}
  }
  ProductInOrder.init(
    {
      orderId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
      price: DataTypes.REAL,
    },
    {
      sequelize,
      modelName: "ProductInOrder",
      tableName: "productsInOrders",
    }
  );
  return ProductInOrder;
};
