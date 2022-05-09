"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("Items", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      user: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "item must belong to a user" },
          isEmail: { args: true, msg: "Please provide a valid email" },
        },
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
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("Items");
  },
};
