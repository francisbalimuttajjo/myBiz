const db = require("../models");
const Handler = require("./Handler");

//deleting one item
exports.deleteOneItem = Handler.deleteOne(db.Item);

//getting all items for a particular user
exports.getAllItemsForUser = Handler.getAll(db.Item);

//adding one time
exports.addOneItem = Handler.addOne(db.Item);

//updating one item
exports.updateOneItem = Handler.updateOne(db.Item);
