"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Denim Trousers S",
          description: "Comfortable trousers, beautiful details at both sides",
          price: 245.82,
          availableQty: 950,
          userId: 1,
          createdAt: "2023-06-07 02:31:53.821-03",
          updatedAt: "2023-06-07 02:30:02.803-03",
        },
        {
          name: "Trousers XS",
          description: "Comfortable trousers, beautiful details at both sides",
          price: 1080.24,
          availableQty: 200,
          userId: 2,
          createdAt: "2023-06-07 02:31:53.821-03",
          updatedAt: "2023-06-07 02:30:02.803-03",
        },
        {
          name: "Denim Trousers XS",
          description: "Comfortable trousers, beautiful details at both sides",
          price: 120.3,
          availableQty: 569,
          userId: 3,
          createdAt: "2023-06-07 02:31:53.821-03",
          updatedAt: "2023-06-07 02:30:02.803-03",
        },
        {
          name: "Denim Trousers S",
          description: "Comfortable trousers, beautiful details at both sides",
          price: 1200.45,
          availableQty: 120,
          userId: 1,
          createdAt: "2023-06-07 02:31:53.821-03",
          updatedAt: "2023-06-07 02:30:02.803-03",
        },
        {
          name: "Denim XL",
          description: "Comfortable trousers, beautiful details at both sides",
          price: 260.2,
          availableQty: 147,
          userId: 2,
          createdAt: "2023-06-07 02:31:53.821-03",
          updatedAt: "2023-06-07 02:30:02.803-03",
        },
        {
          name: "Denim Trousers L",
          description: "Comfortable trousers, beautiful details at both sides",
          price: 245.82,
          availableQty: 950,
          userId: 3,
          createdAt: "2023-06-07 02:31:53.821-03",
          updatedAt: "2023-06-07 02:30:02.803-03",
        },
        {
          name: "T-shirt",
          description: "Comfortable t-shirt, beautiful details at both sides",
          price: 350.99,
          availableQty: 2000,
          userId: 1,
          createdAt: "2023-06-07 02:31:53.821-03",
          updatedAt: "2023-06-07 02:30:02.803-03",
        },
        {
          name: "Cap",
          description: "Comfortable cap, beautiful details at both sides",
          price: 450.69,
          availableQty: 2000,
          userId: 2,
          createdAt: "2023-06-07 02:31:53.821-03",
          updatedAt: "2023-06-07 02:30:02.803-03",
        },
        {
          name: "Dress",
          description: "Comfortable trousers, beautiful details at both sides",
          price: 450.78,
          availableQty: 3000,
          userId: 3,
          createdAt: "2023-06-07 02:31:53.821-03",
          updatedAt: "2023-06-07 02:30:02.803-03",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {},
};
