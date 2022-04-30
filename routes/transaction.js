const express = require("express");
const transactionsController = require("../controllers/transactions");
const router = express.Router();

router
  .route("/transactions")
  .get(transactionsController.getAllTransactions)
  .post(transactionsController.addOneTransaction);

// router
//   .route("/clients/:id")
//   .get(clientController.findOneClient)
//   .put(clientController.updateOneClient)
//   .delete(clientController.deleteOneClient);

module.exports = router;
