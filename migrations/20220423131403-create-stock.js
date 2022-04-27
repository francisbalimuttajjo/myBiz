'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stock', {
   
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,       
         unique: true
      },
      buyingPrice: { type: Sequelize.INTEGER, allowNull: false },
      sellingPrice: { type: Sequelize.INTEGER },
      buyingCurrency: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "ugx",
      },
      packaging: { type: Sequelize.STRING, allowNull: false },
      category: { type: Sequelize.STRING, allowNull: false },
      image: { type: Sequelize.STRING },
      description: { type: Sequelize.STRING, allowNull: false },
      sellingCurrency: { type: Sequelize.STRING, default: "ugx" },
      stock: { type: Sequelize.INTEGER, allowNull: false },
      supplier: { type: Sequelize.STRING },
      isReturnable: { type: Sequelize.BOOLEAN },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Stock');
  }
};