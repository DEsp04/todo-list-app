import { configureStore } from "@reduxjs/toolkit";
import getItemReducer from "./itemsSlice";
import addItemReducer from "./addNewItemSlice"



export default configureStore({
  reducer: {
    getItems: getItemReducer,
    addItem: addItemReducer,
  },
});