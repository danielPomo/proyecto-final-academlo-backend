"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductInOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
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
