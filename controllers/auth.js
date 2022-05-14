const jwt = require("jsonwebtoken");
const db = require("../models");
const { sendResponse } = require("../utils/fns");

exports.auth = async (req, res) => {
  try {
    const { token } = req.params;

    //verifying token
    const decoded_token = await jwt.verify(token, process.env.JWT_SECRET);

    //checking if user still exists
    const user = await db.User.findOne({
      where: {
        id: decoded_token.id,
        active: true,
      },
      include: [
        {
          model: db.Transaction,
          as: "transactions",
        },
      ],
    });

    if (user) {
      return sendResponse(req, res, 200, user);
    }
    sendResponse(req, res, 400, "no user with the id", "fail");
  } catch (err) {
    sendResponse(req, res, 400, err.message, "fail");
  }
};

//getting all items for a particular user
exports.isAuthenticated = async (req, res, next) => {
  console.log("hdhd");
  // const { user } = req.body;
  console.log(req.headers.token);

  try {
    // const { token } = req.params;
    //verifying token
    const { token } = req.headers;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //checking if user still exists
    const user = await db.User.findOne({
      where: {
        id: decoded.id,
        active: true,
      },
    });

    if (!user) {
      //   return sendResponse(req, res, 200, user);
      sendResponse(req, res, 400, "no user with the id", "fail");
    }
    req.user = user.email;
    console.log("user csdfghjkatch", user.email);

    next();
  } catch (err) {
    sendResponse(req, res, 400, err.message, "fail");
  }
};
