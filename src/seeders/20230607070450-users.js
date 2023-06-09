"use strict";

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require("bcrypt");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "leonardo2023",
          email: "leonardo2023@gmail.com",
          password: await bcrypt.hash("12345678", 10),
          createdAt: "2023-06-07 02:31:53.821-03",
          updatedAt: "2023-06-07 02:30:02.803-03",
        },
        {
          username: "daniel2023",
          email: "daniel2023@gmail.com",
          password: await bcrypt.hash("12345678", 10),
          createdAt: "2023-06-07 02:31:53.821-03",
          updatedAt: "2023-06-07 02:30:02.803-03",
        },
        {
          username: "juan2023",
          email: "juan2023@gmail.com",
          password: await bcrypt.hash("12345678", 10),
          createdAt: "2023-06-07 02:31:53.821-03",
          updatedAt: "2023-06-07 02:30:02.803-03",
        },
        {
          username: "ezequiel2023",
          email: "ezequiel2023@gmail.com",
          password: await bcrypt.hash("12345678", 10),
          createdAt: "2023-06-07 02:31:53.821-03",
          updatedAt: "2023-06-07 02:30:02.803-03",
        },
        {
          username: "roberto2023",
          email: "roberto2023@gmail.com",
          password: await bcrypt.hash("12345678", 10),
          createdAt: "2023-06-07 02:31:53.821-03",
          updatedAt: "2023-06-07 02:30:02.803-03",
        },
        {
          username: "estefania2023",
          email: "estefania2023@gmail.com",
          password: await bcrypt.hash("12345678", 10),
          createdAt: "2023-06-07 02:31:53.821-03",
          updatedAt: "2023-06-07 02:30:02.803-03",
        },
        {
          username: "guadalupe2023",
          email: "guadalupe2023@gmail.com",
          password: await bcrypt.hash("12345678", 10),
          createdAt: "2023-06-07 02:31:53.821-03",
          updatedAt: "2023-06-07 02:30:02.803-03",
        },
        {
          username: "lorenzo2023",
          email: "lorenzo2023@gmail.com",
          password: await bcrypt.hash("12345678", 10),
          createdAt: "2023-06-07 02:31:53.821-03",
          updatedAt: "2023-06-07 02:30:02.803-03",
        },
        {
          username: "marina2023",
          email: "marina2023@gmail.com",
          password: await bcrypt.hash("12345678", 10),
          createdAt: "2023-06-07 02:31:53.821-03",
          updatedAt: "2023-06-07 02:30:02.803-03",
        },
        {
          username: "ines2023",
          email: "ines2023@gmail.com",
          password: await bcrypt.hash("12345678", 10),
          createdAt: "2023-06-07 02:31:53.821-03",
          updatedAt: "2023-06-07 02:30:02.803-03",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {},
};
