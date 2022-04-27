module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Stock", [
     
     
      {
        image:'hh',
        name: "pencilsuui",
        buyingCurrency: "usd",
        sellingCurrency: "ksh",
        buyingPrice: 900,
        sellingPrice: 300,
        description: "the latest chinese brabd",
        stock: 2,
        supplier: "mayadnja",
        isReturnable: true,
        packaging: "one",
        category: "stationery",
      },
      {
       
        image:"jk",
        name: "penci",
        buyingCurrency: "usd",
        sellingCurrency: "ksh",
        buyingPrice: 900,
        sellingPrice: 300,
        description: "the latest chinese brabd",
        stock: 2,
        supplier: "mayadnja",
        isReturnable: true,
        packaging: "one",
        category: "stationery",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Stock", null, {});
  },
};
