import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { editCurrentItem } from "../services/editItem";



export const updateCurrentItem = createAsyncThunk(
  "updateItem/updateCurrentItem",
  async ({ categoryField, taskField, id }) => {
    console.log( categoryField, taskField, id )

    const data = editCurrentItem({ categoryField, taskField, id })
    

    return data;
  }
);


const editItemSlice = createSlice({
  name: "updateItem",
  initialState: {
    status: null,
    editItem: null,
  },


  extraReducers: {
    [updateCurrentItem.pending]: (state, action) => {
      state.status = "loading";
    },
    [updateCurrentItem.fulfilled]: (state, {payload}) => {
      state.status = "success";
      state.editItem = payload;
    },
    [updateCurrentItem.rejected]: (state, action) => {
      state.status = "failed";
    },

  },


})

export default editItemSlice.reducer;