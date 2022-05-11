const express = require("express");
const transactionsController = require("../controllers/transactions");
const router = express.Router();

router.route("/transactions").post(transactionsController.addOneTransaction);
router
  .route("/transactions/getAll")
  .post(transactionsController.getAllTransactions);

module.exports = router;
