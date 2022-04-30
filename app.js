const express = require("express");
const app = express();
const itemRouter = require("./routes/item");
const clientRouter = require("./routes/client");
const salesRouter = require("./routes/sale");
const transactionsRouter = require("./routes/transaction");


app.use(express.json());

app.use("/api/v1", itemRouter);
app.use("/api/v1", clientRouter);
app.use("/api/v1", salesRouter);
app.use("/api/v1", transactionsRouter);




module.exports =app
