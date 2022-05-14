const express = require("express");
const salesController = require("../controllers/sale");
const authController = require("../controllers/auth");
const router = express.Router();

router
  .route("/sales")
  .post(authController.isAuthenticated, salesController.addOneSale);

router
  .route("/sales/getAll")
  .post(authController.isAuthenticated, salesController.getAllSales);

router
  .route("/sales/:id")
  .delete(authController.isAuthenticated, salesController.deleteOneSale);

router
  .route("/sales/reverse/:id")
  .delete(authController.isAuthenticated, salesController.reverseSale);
module.exports = router;
