const db = require("../models");
const { sendResponse } = require("../utils/fns");

//adding one sale
exports.addOneTransaction = (req, res) => {
  const { client_id, cashReceived, items, discount } = req.body;
  const itemsIdsArray = [];
  const itemsPricesArray = [];

  //saving items as sales
  Promise.all(
    items.map((item) => {
      db.Sale.create({
        client_id,
        item_id: item.item_id,
        quantity: item.quantity,
        price: item.price,
        total_price: item.quantity * item.price,
      });
      itemsIdsArray.push({ item: item.item_id, quantity: item.quantity });
      itemsPricesArray.push(item.quantity * item.price);
    })
  )
    .then(() => {
      const total = itemsPricesArray.reduce((acc, v) => acc + v, 0);
      //if successfull save in transactions
      db.Transaction.create({
        type: "sales",
        client_id,
        cashReceived,
        cashPending: total - discount - cashReceived,
        total,
        discount,
        items: itemsIdsArray,
      })
        .then((transaction) => {
          //if transactions are saved reduce the stock in database

          Promise.all(
            itemsIdsArray.map((item) => {
              db.Item.update(
                { stock: db.sequelize.literal(`stock - ${item.quantity}`) },
                { where: { id: item.item } }
              );
            })
          )
            //if reducing is successfull ,send response
            .then(() => sendResponse(req, res, 201, transaction))
            .catch((err) => {
              console.log(err);
              sendResponse(req, res, 400, err.message.split(":")[1], "fail");
            });
        })
        .catch((err) => {
          console.log("err", err);
          sendResponse(req, res, 400, err.message.split(":")[1], "fail");
        });
    })
    .catch((err) => {
      sendResponse(req, res, 400, "something went wrong,try again", "fail");
    });
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
        sendResponse(req, res, 404, `Cannot find transaction with id ${id}.`, "fail");
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

// //editing one sale
// exports.updateOneSale = (req, res) => {
//   const id = req.params.id;
//   const { client_id, item_id, quantity, price } = req.body;
//   db.Sale.update(
//     {
//       client_id,
//       item_id,
//       quantity,
//       price,
//       total_price: quantity * price,
//     },
//     { where: { id } }
//   )
//     .then((num) => {
//       if (num > 0) return sendResponse(req, res, 200, "update successfull");
//       sendResponse(
//         req,
//         res,
//         404,
//         "cant update sale with id" + " " + id,
//         "fail"
//       );
//     })
//     .catch((err) =>
//       sendResponse(req, res, 500, "error occured while updating ", "fail")
//     );
// };
// //deleting one sale
// exports.deleteOneSale = (req, res) => {
//   db.Sale.destroy({
//     where: { id: req.params.id },
//   })
//     .then((result) => {
//       if (result === 0) {
//         return sendResponse(
//           req,
//           res,
//           404,
//           ` cannot delete sale with id ${req.params.id}`,
//           "fail"
//         );
//       }
//       sendResponse(req, res, 200, "deleted successfully");
//     })
//     .catch((err) => {
//       sendResponse(
//         req,
//         res,
//         500,
//         `Error deleting sale with id  ${req.params.id}`,
//         "fail"
//       );
//     });
// };
