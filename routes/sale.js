const express = require("express");
const salesController = require("../controllers/sale");
const router = express.Router();

router
  .route("/sales")
  .post(salesController.addOneSale);

router.route("/sales/getAll").post(salesController.getAllSales);

router
  .route("/sales/:id")
  .delete(salesController.deleteOneSale);

router.route("/sales/reverse/:id").delete(salesController.reverseSale);
module.exports = router;
