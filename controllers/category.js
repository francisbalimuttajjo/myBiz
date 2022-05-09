const db = require("../models");
const { sendResponse } = require("../utils/fns");
const Handler = require("./Handler");

//adding one client
exports.addOneCategory = Handler.addOne(db.Category, true);

//updating one item
exports.updateOneCategory = async (req, res) => {
  const { title } = req.body;
  const id = req.params.id;
  try {
    const category = await db.Category.findOne({
      where: { id, title },
    });
    if (category) {
      return sendResponse(req, res, 500, "category already exists", "fail");
    }
    await db.Category.update({ title, value: title }, { where: { id } });
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

//deleting one item
exports.deleteOneCategory = Handler.deleteOne(db.Category);
//getting for particular user
exports.getAllCategoriesForUser = Handler.getAll(db.Category);
