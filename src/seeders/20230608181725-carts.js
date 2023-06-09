"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("carts", [
      {
        userId: "1",
        createdAt: "2023-06-07 02:31:53.821-03",
        updatedAt: "2023-06-07 02:30:02.803-03",
      },
      {
        userId: "2",
        createdAt: "2023-06-07 02:31:53.821-03",
        updatedAt: "2023-06-07 02:30:02.803-03",
      },
      {
        userId: "3",
        createdAt: "2023-06-07 02:31:53.821-03",
        updatedAt: "2023-06-07 02:30:02.803-03",
      },
      {
        userId: "4",
        createdAt: "2023-06-07 02:31:53.821-03",
        updatedAt: "2023-06-07 02:30:02.803-03",
      },
      {
        userId: "5",
        createdAt: "2023-06-07 02:31:53.821-03",
        updatedAt: "2023-06-07 02:30:02.803-03",
      },
      {
        userId: "6",
        createdAt: "2023-06-07 02:31:53.821-03",
        updatedAt: "2023-06-07 02:30:02.803-03",
      },
      {
        userId: "7",
        createdAt: "2023-06-07 02:31:53.821-03",
        updatedAt: "2023-06-07 02:30:02.803-03",
      },
      {
        userId: "8",
        createdAt: "2023-06-07 02:31:53.821-03",
        updatedAt: "2023-06-07 02:30:02.803-03",
      },
      {
        userId: "9",
        createdAt: "2023-06-07 02:31:53.821-03",
        updatedAt: "2023-06-07 02:30:02.803-03",
      },
      {
        userId: "10",
        createdAt: "2023-06-07 02:31:53.821-03",
        updatedAt: "2023-06-07 02:30:02.803-03",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
