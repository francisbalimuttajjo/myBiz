module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        firstName: "John",
        lastName: "Doe",
        email: "exampldde@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "bafra",
        lastName: "Mayanja",
        email: "examplsdde@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("User", null, {});
  },
};
