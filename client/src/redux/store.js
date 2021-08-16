import { configureStore } from "@reduxjs/toolkit";
import getItemReducer from "./itemsSlice";



export default configureStore({
  reducer: {
    getItems: getItemReducer,
  },
});