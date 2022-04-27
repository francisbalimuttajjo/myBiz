const { Stock } = require("../models/stock");
const { sendResponse } = require("../utils/fns");

exports.getAllStock = (req, res) => {
  Stock.findAll()
    .then((stock) => sendResponse(req, res, 200, stock))
    .catch((err) => sendResponse(req, res, 400, err.message, "fail"));
};

exports.addStock = (req, res) => {
  Stock.create(req.body)
    .then((stock) => sendResponse(req, res, 200, stock))
    .catch((err) => sendResponse(req, res, 500, err.message, "fail"));
};

exports.findOneItem = (req, res) => {
  const id = req.params.id;
  Stock.findByPk(id)
    .then((stock) => {
      if (stock) {
        sendResponse(req, res, 200, stock);
      } else {
        sendResponse(req, res, 404, `Cannot find item with id ${id}.`, "fail");
      }
    })
    .catch((err) => {
      sendResponse(
        req,
        res,
        500,
        `Error retrieving item with id  ${id}`,
        "fail"
      );
    });
};

exports.updateItem = (req, res) => {
  const _id = req.params.id;
  Stock.update(req.body, { where: { _id } })
    .then((num) => {
      if (num > 0) return sendResponse(req, res, 200, "update successfull");
      sendResponse(
        req,
        res,
        404,
        "cant update item with id" + " " + _id,
        "fail"
      );
    })
    .catch((err) => sendResponse(req, res, 500, err.message, "fail"));
};
exports.deleteItem = (req, res) => {
  Stock.destroy({
    where: { _id: req.params.id },
  })
    .then((result) => {
      if (result === 0) {
        sendResponse(
          req,
          res,
          404,
          ` cannot delete item with id ${req.params.id}`,
          "fail"
        );
      }
      sendResponse(req, res, 200, "deleted successfull");
    })
    .catch((err) => {
      sendResponse(req, res, 500, `Error deleting item with id  ${id}`, "fail");
    });
};
