const express = require("express");
const itemController = require("../controllers/item");
const authController = require("../controllers/auth");
const router = express.Router();

router
  .route("/items")
  .post(authController.isAuthenticated, itemController.addOneItem);

router
  .route("/items/:id")
  .put(authController.isAuthenticated, itemController.updateOneItem)
  .delete(authController.isAuthenticated, itemController.deleteOneItem);

router
  .route("/items/user")
  .post(authController.isAuthenticated, itemController.getAllItemsForUser);

module.exports = router;
