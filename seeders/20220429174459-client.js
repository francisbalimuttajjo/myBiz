module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Clients", [
      {
        firstName: "John",
        lastName: "Doe",
        email: "baarpdpl@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "bafra",
        lastName: "Mayanja",
        email: "ikodmro@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Clients", null, {});
  },
};
