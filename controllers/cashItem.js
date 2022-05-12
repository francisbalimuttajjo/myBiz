const db = require("../models");
const Handler = require("./Handler");
const { sendResponse } = require("../utils/fns");

//getting all sales for a single user
exports.getAllCashItems = Handler.getAll(db.CashItem);

//updating
exports.updateOneCashItem = Handler.updateOne(db.CashItem);

//deleting one item
exports.deleteOneCashItem = Handler.deleteOne(db.CashItem);

//adding one item
exports.addOneItem = async (req, res) => {
  const {
    Amount,
    Category,
    entryDate,
    itemTime,
    Remark,
    type,
    user,
    paymentMode,
  } = req.body;
  try {
    const item = await db.CashItem.create({
      Amount,
      Category,
      entryDate,
      itemTime,
      Remark,
      type,
      user,
      paymentMode,
    });
    sendResponse(req, res, 201, item);
  } catch (err) {
    sendResponse(req, res, 400, err.message, "fail");
  }
};
