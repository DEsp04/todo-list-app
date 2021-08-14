const { Router } = require("express");
const itemRouter = Router();
const itemControllers = require("../controllers/items");


itemRouter.post(
  "/",
  itemControllers.createItem
);

itemRouter.get(
  "/items",
  itemControllers.getAllItems
);

itemRouter.get(
  "/items/:id",
  itemControllers.getItemByID
);

itemRouter.put(
  "/items/:id",
  itemControllers.updateItem
);

itemRouter.delete(
  "/items/:id",
  itemControllers.deleteItem
);




module.exports = itemRouter;