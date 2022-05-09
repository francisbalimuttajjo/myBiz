const db = require("../models");
const { sendResponse } = require("../utils/fns");
const Handler = require("./Handler");

//deleting one item
exports.deleteOneItem = Handler.deleteOne(db.Item);
//getting all items for a particular user
exports.getAllItemsForUser = Handler.getAll(db.Item);

//adding one time
exports.addOneItem = Handler.addOne(db.Item);

//updating one item
exports.updateOneItem = async (req, res) => {
  const id = req.params.id;
  try {
    await db.Item.update(req.body, { where: { id } });
    sendResponse(req, res, 200, "update successfull");
  } catch (err) {
    sendResponse(
      req,
      res,
      500,
      `error occured while updating item with id ${id}`,
      "fail"
    );
  }
};
