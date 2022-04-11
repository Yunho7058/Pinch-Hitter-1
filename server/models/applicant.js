"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class applicant extends Model {
    static associate(models) {
      applicant.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "id",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
      applicant.belongsTo(models.Board, {
        foreignKey: "board_id",
        targetKey: "id",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  applicant.init(
    {
      user_id: DataTypes.INTEGER,
      board_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "applicant",
    }
  );
  return applicant;
};
