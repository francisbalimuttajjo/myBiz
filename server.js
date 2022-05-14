const db = require("./models");
const app = require("./app");

const PORT = process.env.PORT || 8000;


//connecting to postgress db using sequelize
app.listen(PORT, async () => {
  console.log(`listening  on ${PORT}`);
  db.sequelize
    .authenticate()
    .then(() => console.log("authenticated"))
    .catch((err) => {
     
      console.log(err);
    });
});
