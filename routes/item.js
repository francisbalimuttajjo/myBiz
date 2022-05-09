const express = require("express");
const itemController = require("../controllers/item");
const router = express.Router();

router.route("/items").post(itemController.addOneItem);

router
  .route("/items/:id")
  .put(itemController.updateOneItem)
  .delete(itemController.deleteOneItem);

router.route("/items/user").post(itemController.getAllItemsForUser);

module.exports = router;
