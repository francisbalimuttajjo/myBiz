const db = require("../models");
const { sendResponse } = require("../utils/fns");

//adding one time
exports.addOneItem = (req, res) => {
  db.Item.create(req.body)
    .then((item) => sendResponse(req, res, 201, item))
    .catch((err) => {
       console.log(err);
      sendResponse(req, res, 400, err.message.split(":")[1], "fail");
    });
};

//getting all items
exports.getAllItems = (req, res) => {
  console.log(new Date())
  db.Item.findAll()
    .then((items) => sendResponse(req, res, 200, items))
    .catch((err) => {
      console.log(err);
      sendResponse(req, res, 400, err.message.split(":")[1], "fail");
    });
};

//getting one item
exports.findOneItem = (req, res) => {
  const id = req.params.id;
  db.Item.findOne({
    where: { id },
    include: [
      {
        model: db.Sale,
        as: "sales",
      },
    ],
  })
    .then((items) => {
      if (items) {
        sendResponse(req, res, 200, items);
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

//updating one item
exports.updateOneItem = (req, res) => {
  const id = req.params.id;
  db.Item.update(req.body, { where: { id } })
    .then((num) => {
      if (num > 0) return sendResponse(req, res, 200, "update successfull");
      sendResponse(
        req,
        res,
        404,
        "cant update item with id" + " " + id,
        "fail"
      );
    })
    .catch((err) => {
      console.log(err)
      sendResponse(
        req,
        res,
        500,
        `error occured while updating item with id ${id}`,
        "fail"
      )
    }
    );
};

//deleting one item
exports.deleteOneItem = (req, res) => {
  db.Item.destroy({
    where: { id: req.params.id },
  })
    .then((result) => {
      if (result === 0) {
        return sendResponse(
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
      sendResponse(
        req,
        res,
        500,
        `Error deleting item with id  ${req.params.id}`,
        "fail"
      );
    });
};
