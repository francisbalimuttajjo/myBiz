"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    static associate(models) {
      this.hasMany(models.Sale, {
        foreignKey: "client_id",
        as: "purchases",
      });
    }
  }
  Client.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "Please provide a firstName" },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "Please provide a lastName" },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: { args: true, msg: "Please provide a valid email" },
          notEmpty: true,
      
        },

        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Client",
    }
  );
  return Client;
};
