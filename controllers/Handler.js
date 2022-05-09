const { sendResponse } = require("../utils/fns");

exports.deleteOne = (Model) => async (req, res) => {
  try {
    const id = req.params.id;
    await Model.destroy({ where: { id } });
    return sendResponse(req, res, 200, "deleted successfull");
  } catch (err) {
    sendResponse(
      req,
      res,
      500,
      `Error deleting document with id  ${id}`,
      "fail"
    );
  }
};

//getting all items for a particular user
exports.getAll = (Model) => async (req, res) => {
  const { user } = req.body;
  try {
    const docs = await Model.findAll({ where: { user } });
    sendResponse(req, res, 200, docs);
  } catch (err) {
    sendResponse(req, res, 400, err, "fail");
  }
};

exports.addOne = (Model, category) => async (req, res) => {
  const { user, title } = req.body;
  try {
    if (!category) {
      const item = await Model.findAll({
        where: { user, name: req.body.name },
      });
      if (item.length)
        return sendResponse(
          req,
          res,
          400,
          req.body.name + " " + " already exists",
          "fail"
        );
      const new_item = await Model.create(req.body);
      return sendResponse(req, res, 201, new_item);
    } else {
      //   //checking if already exists for that particular user
      const category = await Model.findAll({ where: { user, title } });

      if (category.length) {
        return sendResponse(
          req,
          res,
          400,
          title + " " + " already exists",
          "fail"
        );
      } else {
        const new_category = await Model.create({
          user,
          value: title,
          title,
        });
        return sendResponse(req, res, 201, new_category);
      }
    }
  } catch (err) {
    sendResponse(req, res, 400, err, "fail");
  }
};
