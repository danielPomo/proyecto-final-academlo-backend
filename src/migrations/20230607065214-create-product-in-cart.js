"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("productsInCarts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cartId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "carts",
          key: "id",
        },
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "products",
          key: "id",
        },
      },
      qty: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      price: {
        type: Sequelize.REAL,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM("purchased", "not purchased"),
        defaultValue: "not purchased",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("productsInCarts");
  },
};
