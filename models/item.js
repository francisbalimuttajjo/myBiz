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
        foreignKey: "user_id",
        as :"items"
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
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "item must belong to a user" },
        },
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
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
