const express = require("express");
const clientController = require("../controllers/client");
const router = express.Router();

router
  .route("/clients")
  .get(clientController.getAllClients)
  .post(clientController.addOneClient);

router
  .route("/clients/:id")
  .get(clientController.findOneClient)
  .put(clientController.updateOneClient)
  .delete(clientController.deleteOneClient);

module.exports = router;
