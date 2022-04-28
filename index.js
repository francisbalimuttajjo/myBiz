var express = require("express");
const { sequelize } = require("./models");
require("dotenv").config({});


var app = express();
const stockRouter = require("./routes/stock");

app.use(express.json());

app.use("/api/v1", stockRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`listening  on ${PORT}`);
  sequelize
    .authenticate()
    .then(() => console.log("db authenticated"))
    .catch((err) => console.log(err));
});
