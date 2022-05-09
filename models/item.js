"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      this.hasMany(models.Sale, {
        foreignKey: "item_id",
        as: "sales",
      });
      this.belongsTo(models.User, {
        foreignKey: "user",
        as: "items",
        sourceKey: "email",
      });
    }
  }
  Item.init(
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
          notEmpty: { args: true, msg: "item must belong to a user" },
          isEmail: { args: true, msg: "Please provide a valid email" },
        },
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      buyingPrice: { type: DataTypes.INTEGER, allowNull: false },
      sellingPrice: { type: DataTypes.INTEGER },
      buyingCurrency: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "ugx",
      },
      packaging: { type: DataTypes.STRING, allowNull: false },
      category: { type: DataTypes.STRING, allowNull: false },
      image: { type: DataTypes.STRING },
      description: { type: DataTypes.STRING, allowNull: false },
      sellingCurrency: { type: DataTypes.STRING, defaultValue: "ugx" },
      stock: { type: DataTypes.INTEGER, allowNull: false },
      supplier: { type: DataTypes.STRING },
      isReturnable: { type: DataTypes.BOOLEAN },
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
