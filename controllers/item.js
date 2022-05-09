const db = require("../models");
const { sendResponse } = require("../utils/fns");
const Handler = require("./Handler");



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
      console.log(err);
      sendResponse(
        req,
        res,
        500,
        `error occured while updating item with id ${id}`,
        "fail"
      );
    });
};

//deleting one item
exports.deleteOneItem = Handler.deleteOne(db.Item);
//getting all items for a particular user
exports.getAllItemsForUser = Handler.getAll(db.Item);

//adding one time
exports.addOneItem = Handler.addOne(db.Item);
