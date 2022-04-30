const express = require("express");
const app = express();
const db = require("./models");
const itemRouter = require("./routes/item");
const clientRouter = require("./routes/client");
const salesRouter = require("./routes/sale");
const transactionsRouter = require("./routes/transaction");

app.use(express.json());

app.use("/api/v1", itemRouter);
app.use("/api/v1", clientRouter);
app.use("/api/v1", salesRouter);
app.use("/api/v1", transactionsRouter);


const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
  console.log(`listening  on ${PORT}`);
  db.sequelize
    .authenticate()
    .then(() => console.log("authenticated"))
    .catch((err) => console.log(err));
});
