"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, { foreignKey: "userId" });
      Order.belongsToMany(models.Product, {
        through: models.ProductInOrder,
        foreignKey: "productId",
      });
    }
  }
  Order.init(
    {
      totalPrice: DataTypes.REAL,
      userId: DataTypes.INTEGER,
      status: DataTypes.ENUM("complete", "pending"),
    },
    {
      sequelize,
      modelName: "Order",
      tableName: "orders",
    }
  );
  return Order;
};
