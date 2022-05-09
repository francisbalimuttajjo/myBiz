const express = require("express");
const categoriesController = require("../controllers/category");
const router = express.Router();

router.route("/categories").post(categoriesController.addOneCategory);
router
  .route("/categories/getAll")
  .post(categoriesController.getAllCategoriesForUser);

router
  .route("/categories/:id")
  .patch(categoriesController.updateOneCategory)
  .delete(categoriesController.deleteOneCategory);

module.exports = router;
