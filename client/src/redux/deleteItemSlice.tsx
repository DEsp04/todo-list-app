import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { removeItem } from "../services/deleteItem";



export const deleteCurrentItem = createAsyncThunk(
  "deleteItem/deleteCurrentItem",
  async (id: string) => {
    const data = removeItem(id)
    

    return data;
  }
);

type DeleteItem = {
  status: string | null,
  deletedItem: object | null,
}

const initialState = {
  status: null,
  deletedItem: null,
} as DeleteItem


const deleteItemSlice = createSlice({
  name: "deleteItem",
  initialState,
  reducers: {},
  
  extraReducers: (builder) => {
    builder.addCase(deleteCurrentItem.pending, (state, action) => {
      state.status = "loading";
    })
    builder.addCase(deleteCurrentItem.fulfilled, (state, action: PayloadAction<string[]>) => {
      state.status = "success";
      state.deletedItem = action.payload;
    })
    builder.addCase(deleteCurrentItem.rejected, (state, action) => {
      state.status = "failed";
    })
  },

})

export default deleteItemSlice.reducer;