"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Board, {
        foreignKey: "user_id",
        sourceKey: "id",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
      User.belongsToMany(models.Board, {
        through: "applicant",
        foreignKey: "user_id",
        sourceKey: "id",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  User.init(
    {
      userId: DataTypes.STRING,
      password: DataTypes.STRING,
      nickname: DataTypes.STRING,
      email: DataTypes.STRING,
      mobile: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
