import { Router } from "express";
const itemRouter = Router();
// const itemControllers = require("../controllers/items");
import { createItem, getAllItems, getItemByID, updateItem, deleteItem } from "../controllers/items"


itemRouter.post(
  "/",
  createItem
);

itemRouter.get(
  "/items",
  getAllItems
);

itemRouter.get(
  "/items/:id",
  getItemByID
);

itemRouter.put(
  "/items/:id",
  updateItem
);

itemRouter.delete(
  "/items/:id",
  deleteItem
);




module.exports = itemRouter;