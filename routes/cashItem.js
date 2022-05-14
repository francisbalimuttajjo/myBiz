const express = require("express");
const cashItemController = require("../controllers/cashItem");
const authController = require("../controllers/auth");
const router = express.Router();

router
  .route("/cashItem")
  .post(authController.isAuthenticated, cashItemController.addOneItem);

router
  .route("/cashItem/getAll")
  .post(authController.isAuthenticated, cashItemController.getAllCashItems);

router
  .route("/cashItem/:id")
  .delete(authController.isAuthenticated, cashItemController.deleteOneCashItem)
  .put(authController.isAuthenticated, cashItemController.updateOneCashItem);

module.exports = router;
