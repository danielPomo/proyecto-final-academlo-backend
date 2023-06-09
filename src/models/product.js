"use strict";
const { Model, ForeignKeyConstraintError } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.User, { foreignKey: "userId" });
      Product.belongsToMany(models.Cart, {
        through: models.ProductInCart,
        foreignKey: "cartId",
      });
      Product.belongsToMany(models.Order, {
        through: models.ProductInOrder,
        foreignKey: "orderId",
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.REAL,
      availableQty: DataTypes.INTEGER,
      status: DataTypes.ENUM("available", "unavailable"),
      userId: DataTypes.INTEGER,
      productImage: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "products",
    }
  );
  return Product;
};
