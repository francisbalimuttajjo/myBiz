const db = require("../models");
const Handler = require("./Handler");
const { sendResponse } = require("../utils/fns");

//getting all sales for a single user
exports.getAllSales = Handler.getAll(db.Sale);

//adding one sale
exports.addOneSale = (req, res) => {
  const { user, item_id, quantity, price } = req.body;
  db.Sale.create({
    user,
    item_id,
    quantity,
    price,
    total_price: quantity * price,
  })
    .then((sale) => sendResponse(req, res, 201, sale))
    .catch((err) => {
      sendResponse(req, res, 400, err.message.split(":")[1], "fail");
    });
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

//reversing / cancelling single sale
exports.reverseSale = async (req, res) => {
  try {
    //getting the sale
    const sale = await db.Sale.findOne({
      where: { id: req.params.id },
    });
    //updating stock  before deleting
    await db.Item.update(
      { stock: db.sequelize.literal(`stock + ${sale.quantity}`) },
      { where: { id: sale.item_id } }
    );
    //deleting sale from table
    await db.Sale.destroy({
      where: { id: req.params.id },
    });
    sendResponse(req, res, 200, "operation successfull");
  } catch (err) {
    sendResponse(req, res, 400, err.message, "fail");
  }
};
