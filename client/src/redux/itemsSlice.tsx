import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getItems } from "../services/fetchItems";



export const fetchItems = createAsyncThunk(
  "item/fetchItems",
  async () => {
    
    const data = getItems()
    return data;
  }
);

type Item = {
  status: string | null,
  items: {
    id: string;
    title: string;
    description: string;
    completed: boolean;
  } | null
}

const initialState = {
  status: null,
  items: null,
} as Item


const itemsSlice = createSlice({
  name: "item",
  initialState,
  reducers:{},


  extraReducers: (builder) => {

    builder.addCase(fetchItems.pending, (state) => {
      state.status = "loading";
    })
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.status = "success";
      state.items = action.payload;
    })
    builder.addCase(fetchItems.rejected, (state) => {
      state.status = "failed";
    })
  },


})

export default itemsSlice.reducer;