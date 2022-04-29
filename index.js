const express = require("express");
const app = express();
const db = require("./models");
const itemRouter = require("./routes/item");
const clientRouter = require("./routes/client");

app.use(express.json());

app.use("/api/v1", itemRouter);
app.use("/api/v1", clientRouter);
// app.get("/users", async (req, res) => {
//   try {
//     const user = await db.Item.findAll({
//       include: [
//         //db.Client, db.Item
//             {
//             model:db.Sale,
//             as: "sales",
//           }
//       ],
//     });
//     //   include: [
//     //   //   {
//     //   //   db.Branch,
//     //   //   as: "branches",
//     //   // }
//     //     {
//     //       model: db.Branch,
//     //       as: "branches",
//     //     },
//     //   ],
//     // });
//     // const user = await db.Branch.findAll({
//     // include: [db.Manager,db.Company
//     //   {
//     //   db.Branch,
//     //   as: "branches",
//     // }
//     // {
//     //   model: db.Branch,
//     //   as: "managers",
//     // },
//     //   ],
//     // });
//     return res.status(200).json({ status: "success", user });
//   } catch (e) {
//     console.log("error fetching user:", e);
//   }
// });

const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
  console.log(`listening  on ${PORT}`);
  db.sequelize
    .authenticate()
    .then(() => console.log("authenticated"))
    .catch((err) => console.log(err));
});
