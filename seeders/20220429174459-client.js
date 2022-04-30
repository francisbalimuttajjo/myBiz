module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Clients", [
      {
        firstName: "John",
        lastName: "Doe",
        email: "baarpdepl@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "bafra",
        lastName: "Mayanja",
        email: "ikodmreo@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Clients", null, {});
  },
};
