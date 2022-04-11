"use strict";

const applicant = require("../models/applicant");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("applicants", [
      {
        user_id: 1,
        board_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        board_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        board_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        board_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 5,
        board_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 6,
        board_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        board_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 9,
        board_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("applicants", null, {});
  },
};
