const express = require("express");
const itemRouter = require("./routes/item");
const salesRouter = require("./routes/sale");
const userRouter = require("./routes/user");
const transactionsRouter = require("./routes/transaction");
const categoriesRouter = require("./routes/category");
const cashItemRouter = require("./routes/cashItem");
const { sendResponse } = require("./utils/fns");

const app = express();
app.use(express.json());

app.use("/api/v1", itemRouter);
app.use("/api/v1", userRouter);
app.use("/api/v1", salesRouter);
app.use("/api/v1", transactionsRouter);
app.use("/api/v1", categoriesRouter);
app.use("/api/v1", cashItemRouter);

//not found route

app.use("*", (req, res) =>
  sendResponse(
    req,
    res,
    404,
    `${req.originalUrl} is not available on the server`,
    "fail"
  )
);

module.exports = app;
