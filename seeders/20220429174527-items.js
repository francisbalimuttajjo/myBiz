module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Items", [
      {
        name: "pensl",
        buyingPrice: 600,
        sellingPrice: 900,
        buyingCurrency: "ugx",
        packaging: "dozen",
        category: "stationery",
        description: "this is after ",
        sellingCurrency: "ksh",
        stock: 89,
        supplier: "bamayanja investments",
        isReturnable: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Items", null, {});
  },
};
