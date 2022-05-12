const express = require("express");
const cashItemController = require("../controllers/cashItem");
const router = express.Router();

router.route("/cashItem").post(cashItemController.addOneItem);

router.route("/cashItem/getAll").post(cashItemController.getAllCashItems);

router
  .route("/cashItem/:id")
  .delete(cashItemController.deleteOneCashItem)
  .put(cashItemController.updateOneCashItem);

module.exports = router;
