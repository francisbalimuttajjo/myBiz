const express = require("express");
const salesController = require("../controllers/sale");
const router = express.Router();

router
  .route("/sales")
  .get(salesController.getAllSales)
  .post(salesController.addOneSale);

router
  .route("/sales/:id")
  
   .delete(salesController.deleteOneSale);

router.route("/sales/reverse/:id").delete(salesController.reverseSale);
module.exports = router;
