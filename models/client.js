"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON() {
      return { ...this.get(), createdAt: undefined, updatedAt: undefined };
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

      first_name: { type: DataTypes.STRING, allowNull: false, notEmpty: true },
      last_name: { type: DataTypes.STRING, allowNull: false, notEmpty: true },
      email: {
        type: DataTypes.STRING,
        isEmail: true,
        allowNull: false,
        unique: true,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    // {
    //   timestamps: true,
    //   underscored: true,
    // },
    {
      tableName: "clients",
      modelName: "client",
      sequelize,
      underscored: true,
      // timestamps: true,
      underscored: true,
    }
  );
  return Client;
};
