import { configureStore } from "@reduxjs/toolkit";
import getItemReducer from "./itemsSlice";
import addItemReducer from "./addNewItemSlice";
import deleteItemReducer from "./deleteItemSlice";



export default configureStore({
  reducer: {
    getItems: getItemReducer,
    addItem: addItemReducer,
    deleteItem: deleteItemReducer
  },
});