const jwt = require("jsonwebtoken");
const db = require("../models");
const { sendResponse } = require("../utils/fns");

exports.auth = async (req, res) => {
  try {
    const { token } = req.params;
    console.log(token);

    //verifying token
    const decoded_token = await jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded_token);

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
  try {
    const { token } = req.headers;
    if (!token) {
      return sendResponse(req, res, 400, "no token was provided", "fail");
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //checking if user still exists
    const user = await db.User.findOne({
      where: {
        id: decoded.id,
        active: true,
      },
    });

    if (!user) {
      sendResponse(req, res, 400, "no user with the id", "fail");
      return;
    }

    next();
  } catch (err) {
    sendResponse(req, res, 400, err.message, "fail");
  }
};
