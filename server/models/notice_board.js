"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Board extends Model {
    static associate(models) {
      Board.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "id",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
      Board.belongsToMany(models.User, {
        through: "applicant",
        foreignKey: "board_id",
        sourceKey: "id",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  Board.init(
    {
      user_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      occupation: DataTypes.STRING,
      wage: DataTypes.STRING,
      work_date: DataTypes.STRING,
      work_place: DataTypes.STRING,
      content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Board",
    }
  );
  return Board;
};
