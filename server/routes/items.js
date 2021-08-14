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
  "/beverages/:id",
  itemControllers.getItemByID
);


module.exports = itemRouter;