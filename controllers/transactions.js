const db = require("../models");
const Handler = require("./Handler");
const { sendResponse } = require("../utils/fns");

//getting transactions for a single user
exports.getAllTransactions = Handler.getAll(db.Transaction);
//adding one sale
exports.addOneTransaction = async (req, res) => {
  try {
    const { user, client, cashReceived, items, discount, type, paymentDate } =
      req.body;
    const itemsIdsArray = [];
    const itemsPricesArray = [];
    //saving items as sales
    await items.map((item) => {
      db.Sale.create({
        user,
        client,
        item:item.item,
        item_id: item.item_id,
        quantity: item.quantity,
        price: item.price,
        total_price: item.quantity * item.price,
      });
      itemsIdsArray.push({ item: item.item_id, quantity: item.quantity });
      itemsPricesArray.push(item.quantity * item.price);
    });
    ///getting overall total
    const total = itemsPricesArray.reduce((acc, v) => acc + v, 0);
    const cashPending = total - discount - cashReceived;
    //creating transaction
    const transaction = await db.Transaction.create({
      type,
      user,
      client,
      cashReceived,
      cashPending,
      paymentDate: cashPending > 0 ? paymentDate : null,
      total,
      discount,
      items: itemsIdsArray,
    });

    //reduce stock in db
    await itemsIdsArray.map((item) => {
      db.Item.update(
        { stock: db.sequelize.literal(`stock - ${item.quantity}`) },
        { where: { id: item.item } }
      );
    });
    //send response
    sendResponse(req, res, 201, transaction);
  } catch (err) {
    
    sendResponse(req, res, 400, err.message, "fail");
  }
};
