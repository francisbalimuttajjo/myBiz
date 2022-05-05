const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();

router
  .route("/users/register")
  //   .get(clientController.getAllClients)
  .post(userController.addOneUser);
// .post(userController.loginUser)

router
  .route("/users/login")
  //   .get(clientController.getAllClients)
  // .post(userController.addOneUser)
  .post(userController.loginUser);

module.exports = router;
