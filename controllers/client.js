const db = require("../models");
const { sendResponse } = require("../utils/fns");

//adding one client
exports.addOneClient = (req, res) => {
  const { firstName, lastName, email } = req.body;
  //checking if already exists
  db.Client.findAll({ where: { email } })
    .then((list) => {
      if (list.length != 0)
            return sendResponse(req, res, 400, "Client already exists",'fail');
        
        //if new client then create one
      db.Client.create({ firstName, lastName, email })
        .then((client) => sendResponse(req, res, 201, client))
        .catch((err) =>
          sendResponse(req, res, 400, err.message.split(":")[1], "fail")
        );
    })
    .catch((err) =>
      sendResponse(req, res, 400, err.message.split(":")[1], "fail")
    );
};
//getting all clients
exports.getAllClients = (req, res) => {
  db.Item.findAll()
    .then((clients) => sendResponse(req, res, 200, clients))
    .catch((err) => sendResponse(req, res, 400, err.message, "fail"));
};

//getting one client
exports.findOneClient = (req, res) => {
  const id = req.params.id;
  db.Client.findOne({
    where: { id },
    include: [
      {
        model: db.Sale,
        as: "purchases",
      },
    ],
  })
    .then((client) => {
      if (client) {
        sendResponse(req, res, 200, client);
      } else {
        sendResponse(
          req,
          res,
          404,
          `Cannot find client with id ${id}.`,
          "fail"
        );
      }
    })
    .catch((err) => {
      sendResponse(
        req,
        res,
        500,
        `Error retrieving client with id  ${id}`,
        "fail"
      );
    });
};
//updating one item
exports.updateOneClient = (req, res) => {
  const id = req.params.id;
  db.Client.update(req.body, { where: { id } })
    .then((num) => {
      if (num > 0) return sendResponse(req, res, 200, "update successfull");
      sendResponse(
        req,
        res,
        404,
        "cant update client with id" + " " + id,
        "fail"
      );
    })
    .catch((err) => sendResponse(req, res, 500, err.message, "fail"));
};

//deleting one client
exports.deleteOneClient = (req, res) => {
  db.Client.destroy({
    where: { id: req.params.id },
  })
    .then((result) => {
      if (result === 0) {
        return sendResponse(
          req,
          res,
          404,
          ` cannot delete client with id ${req.params.id}`,
          "fail"
        );
      }
      sendResponse(req, res, 200, "deleted successfully");
    })
    .catch((err) => {
      sendResponse(
        req,
        res,
        500,
        `Error deleting client with id  ${req.params.id}`,
        "fail"
      );
    });
};
