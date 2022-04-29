module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Sales", [
      {
        item_id: 1,
         client_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // {
      //   item_id: 1,
      //   client_id: 2,
      //   created_at: new Date(),
      //   updated_at: new Date(),
      // },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Sales", null, {});
  },
};
