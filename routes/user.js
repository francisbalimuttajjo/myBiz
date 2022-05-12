const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();

router
  .route("/users/register")
  .post(userController.addOneUser);

router
  .route("/users/login")
  .post(userController.loginUser);

module.exports = router;
