module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("stocks", [
      {
        name: "pencils",
        buying_price: 600,
        selling_price: 900,
        buying_currency: "ugx",
        packaging: "dozen",
        category: "stationery",
        description: "this is after ",
        selling_currency: "ksh",
        stock: 89,
        supplier: "bamayanja investments",
        is_returnable: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      // {
      //   firstName: "bafra",
      //   lastName: "Mayanja",
      //   email: "exampddde@example.com",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("stocks", null, {});
  },
};
