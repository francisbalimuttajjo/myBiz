const express = require("express");
const categoriesController = require("../controllers/category");
const authController = require("../controllers/auth");
const router = express.Router();

router
  .route("/categories")
  .post(authController.isAuthenticated, categoriesController.addOneCategory);
router
  .route("/categories/getAll")
  .post(
    authController.isAuthenticated,
    categoriesController.getAllCategoriesForUser
  );

router
  .route("/categories/:id")
  .patch(authController.isAuthenticated, categoriesController.updateOneCategory)
  .delete(
    authController.isAuthenticated,
    categoriesController.deleteOneCategory
  );

module.exports = router;
