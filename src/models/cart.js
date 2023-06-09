"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      Cart.belongsTo(models.User, { foreignKey: "userId" });
      Cart.belongsToMany(models.Product, {
        through: models.ProductInCart,
        foreignKey: "productId",
      });
    }
  }
  Cart.init(
    {
      userId: DataTypes.INTEGER,
      totalPrice: DataTypes.REAL,
    },
    {
      sequelize,
      modelName: "Cart",
      tableName: "carts",
    }
  );
  return Cart;
};
