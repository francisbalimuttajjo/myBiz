const db = require("../models");
const { sendResponse } = require("../utils/fns");

exports.getAllSales = (req, res) => {
  db.Sale.findAll({ include: [db.Client, db.Item] })
    .then((sales) => sendResponse(req, res, 200, sales))
    .catch((err) => sendResponse(req, res, 400, err.message, "fail"));
};

//getting one sale
exports.findOneSale = (req, res) => {
  const id = req.params.id;
  db.Sale.findOne({
    where: { id },
    include: [db.Client, db.Item],
  })
    .then((sale) => {
      if (sale) {
        sendResponse(req, res, 200, sale);
      } else {
        sendResponse(req, res, 404, `Cannot find sale with id ${id}.`, "fail");
      }
    })
    .catch((err) => {
      sendResponse(
        req,
        res,
        500,
        `Error retrieving sale with id  ${id}`,
        "fail"
      );
    });
};

//adding one sale
exports.addOneSale = (req, res) => {
  const { client_id, item_id, total_price } = req.body;
  db.Sale.create({ client_id, item_id, total_price })
    .then((sale) => sendResponse(req, res, 201, sale))
    .catch((err) => {
      
      sendResponse(req, res, 400, err.message.split(":")[1], "fail");
    });
};
//editing one sale
exports.updateOneSale = (req, res) => {
  const id = req.params.id;
  db.Sale.update(req.body, { where: { id } })
    .then((num) => {
      if (num > 0) return sendResponse(req, res, 200, "update successfull");
      sendResponse(
        req,
        res,
        404,
        "cant update sale with id" + " " + id,
        "fail"
      );
    })
    .catch((err) =>
      sendResponse(req, res, 500, "error occured while updating ", "fail")
    );
};
//deleting one sale
exports.deleteOneSale = (req, res) => {
  db.Sale.destroy({
    where: { id: req.params.id },
  })
    .then((result) => {
      if (result === 0) {
        return sendResponse(
          req,
          res,
          404,
          ` cannot delete sale with id ${req.params.id}`,
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
        `Error deleting sale with id  ${req.params.id}`,
        "fail"
      );
    });
};
