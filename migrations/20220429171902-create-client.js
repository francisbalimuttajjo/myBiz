'use strict';
module.exports = {
  async up(queryInterface,DataTypes) {
    await queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type:DataTypes.INTEGER
      },
      firstName: {
        type:DataTypes.STRING
      },
      lastName: {
        type:DataTypes.STRING
      },
      email: {
        type:DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type:DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type:DataTypes.DATE
      }
    });
  },
  async down(queryInterface,DataTypes) {
    await queryInterface.dropTable('Clients');
  }
};