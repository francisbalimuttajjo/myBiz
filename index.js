var express = require("express");
const { sequelize } = require("./models");

async function main() {
  await sequelize.sync();
}
// main();

var app = express();
const stockRouter = require("./routes/stock");

app.use(express.json());

app.use("/api/v1", stockRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
  console.log(`listening  on ${PORT}`);
  await sequelize.authenticate();
  console.log("db authenticated");
});
