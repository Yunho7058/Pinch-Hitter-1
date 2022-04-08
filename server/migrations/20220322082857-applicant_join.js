"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("applicants", {
      fields: ["user_id"],
      type: "foreign key",
      name: "user_applicants_key",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    await queryInterface.addConstraint("applicants", {
      fields: ["board_id"],
      type: "foreign key",
      name: "board_applicants_key",
      references: {
        table: "Boards",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("applicants", "user_applicants_key");
    await queryInterface.removeConstraint("applicants", "board_applicants_key");
  },
};
