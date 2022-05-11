"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "user",
        sourceKey: "email",
      });
      this.belongsTo(models.Item, {
        foreignKey: "item_id",
      });
    }

    toJSON() {
      return {
        ...this.get(),
        user:undefined,
        updatedAt: undefined,
        item_id: undefined,
      };
    }
  }
  Sale.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: { args: true, msg: "Please provide a valid email" },
          notEmpty: { args: true, msg: "user must be included" },
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "qty must be included" },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "qty must be included" },
        },
      },
      total_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "total price must be included" },
        },
      },
      item_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "Sale must belong to an item" },
        },
      },
      client: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "Sale must belong to a client" },
        },
      },
      item: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "Sale must belong to an item" },
        },
      },
    },
    {
      sequelize,
      modelName: "Sale",
    }
  );
  return Sale;
};
