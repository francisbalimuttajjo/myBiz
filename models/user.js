"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Item, {
        foreignKey: "user",
        as: "items",
        sourceKey: "email",
      });
    }
    toJSON() {
      return {
        ...this.get(),
        id: undefined,
        createdAt: undefined,
        updatedAt: undefined,
        active: undefined,
        password: undefined,
      };
    }
  }

  User.init(
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
          notEmpty: { args: true, msg: "firstName is required" },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "lastName is required" },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { args: true, msg: "password is required" },
        },
      },
      photo: DataTypes.STRING,
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: { args: true, msg: "Please provide a valid email" },
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }

    // Method 3 via the direct method
    // User.beforeCreate(async (user, options) => {
    //   const hashedPassword = await hashPassword(user.password);
    //   user.password = hashedPassword;
    // })
    // User.beforeCreate((user, options) => {
    //   return bcrypt
    //     .hash(user.password, 10)
    //     .then((hash) => {
    //       user.password = hash;
    //       user.passwordConfirm = undefined;
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       throw new Error();
    //     });
    // })
  );
  User.beforeCreate((user, options) => {
    return bcrypt
      .hash(user.password, 10)
      .then((hash) => {
        user.password = hash;
        // user.passwordConfirm = undefined;
      })
      .catch((err) => {
        console.log(err);
        throw new Error();
      });
  });
  return User;
};
