const express = require("express");
const transactionsController = require("../controllers/transactions");
const authController = require("../controllers/auth");
const router = express.Router();

router
  .route("/transactions")
  .post(
    authController.isAuthenticated,
    transactionsController.addOneTransaction
  );
router
  .route("/transactions/getAll")
  .post(
    authController.isAuthenticated,
    transactionsController.getAllTransactions
  );

module.exports = router;
