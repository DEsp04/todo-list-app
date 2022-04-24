import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { editCurrentItem } from "../services/editItem";



export const updateCurrentItem = createAsyncThunk(
  "updateItem/updateCurrentItem",
  async ({ categoryField, taskField, id }: {categoryField: string, taskField: string, id: string}) => {
    const data = editCurrentItem({ categoryField, taskField, id })

    return data;
  }
);

type EditItem = {
  status: string | null,
  editItem: any | null,
}

const initialState = {
  status: null,
  editItem: null,
} as EditItem


const editItemSlice = createSlice({
  name: "updateItem",
  initialState,
  reducers:{},


  extraReducers: (builder) => {
    builder.addCase(updateCurrentItem.pending, (state) => {
      state.status = "loading";
    })
    builder.addCase(updateCurrentItem.fulfilled, (state, action) => {
      state.status = "success";
      state.editItem = action.payload;
    })
    builder.addCase(updateCurrentItem.rejected, (state) => {
      state.status = "failed";
    })
  },

})

export default editItemSlice.reducer;