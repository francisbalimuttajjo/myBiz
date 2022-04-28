module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("clients", [
      {
        first_name: "John",
        last_name: "Doe",
        email: "bafraj@example.com",
        created_at: new Date(),
        updated_at: new Date(),
      
      },
      {
        first_name: "bafra",
        last_name: "Mayanja",
        email: "exef@example.com",
        created_at: new Date(),
        updated_at: new Date(),
       
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("clients", null, {});
  },
};
