const express = require("express");
const stockController = require("../controllers/stock");
const router = express.Router();

router
  .route("/stock")
  .get(stockController.getAllStock)
  .post(stockController.addStock);

router
  .route("/stock/:id")
  .get(stockController.findOneItem)
  .put(stockController.updateItem)
  .delete(stockController.deleteItem);

module.exports = router;
