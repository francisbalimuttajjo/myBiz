module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Sales", [
      {
        item_id: 1,
        user: "bamayanja@gmail.com",
        quantity: 2,
        price: 200,
        total_price: 700,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_id: 1,
        user: "bamayanja@gmail.com",
        quantity: 2,
        price: 200,
        total_price: 7900,
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
