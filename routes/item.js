const express = require("express");
const itemController = require("../controllers/item");
const router = express.Router();

router
  .route("/items")
  .get(itemController.getAllItems)
  .post(itemController.addOneItem);

router
  .route("/items/:id")
  .get(itemController.findOneItem)
  .put(itemController.updateOneItem)
  .delete(itemController.deleteOneItem);

module.exports = router;
