const db = require("../models");
const { sendResponse } = require("../utils/fns");

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
    console.log({ err });
    sendResponse(req, res, 400, err, "fail");
  }
};

exports.getAllTransactions = (req, res) => {
  db.Transaction.findAll()
    .then((transactions) => sendResponse(req, res, 200, transactions))
    .catch((err) => sendResponse(req, res, 400, err.message, "fail"));
};

//getting one transaction
exports.findOneTransaction = (req, res) => {
  const id = req.params.id;
  db.Transaction.findOne({
    where: { id },
  })
    .then((transaction) => {
      if (transaction) {
        sendResponse(req, res, 200, transaction);
      } else {
        sendResponse(
          req,
          res,
          404,
          `Cannot find transaction with id ${id}.`,
          "fail"
        );
      }
    })
    .catch((err) => {
      sendResponse(
        req,
        res,
        500,
        `Error retrieving transaction with id  ${id}`,
        "fail"
      );
    });
};