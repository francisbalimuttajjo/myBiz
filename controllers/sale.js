const db = require("../models");
const Handler = require("./Handler");
const { sendResponse } = require("../utils/fns");

//getting all sales for a single user
exports.getAllSales = Handler.getAll(db.Sale);

//deleting one sale
exports.deleteOneSale = Handler.deleteOne(db.Sale);

//adding one sale
exports.addOneSale = async (req, res) => {
  try {
    const { user, item_id, quantity, price, client, item } = req.body;
    const sale = await db.Sale.create({
      client,
      user,
      item,
      item_id,
      quantity,
      price,
      total_price: quantity * price,
    });
    sendResponse(req, res, 201, sale);
  } catch (err) {
    sendResponse(req, res, 400, err.message, "fail");
  }
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
