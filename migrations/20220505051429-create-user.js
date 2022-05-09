"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("Users", {
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
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
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
    // });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("Users");
  },
};
