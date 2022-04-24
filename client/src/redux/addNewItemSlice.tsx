import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { addItem } from "../services/addNewItem";



export const createNewItem = createAsyncThunk(
  "newItem/createNewItem",
  async ({ categoryField, taskField }: {categoryField: string, taskField: string}) => {
    const data = addItem({ categoryField, taskField })
    
    return data;
  }
);


type NewItem = {
  status: string | null,
  newItem: any | null,
}

const initialState = {
  status: null,
  newItem: null,
} as NewItem

const newItemSlice = createSlice({
  name: "newItem",
  initialState,
  reducers:{},


  extraReducers: (builder) => {
    builder.addCase(createNewItem.pending, (state) => {
      state.status = "loading";
    })
    builder.addCase(createNewItem.fulfilled, (state, action) => {
      state.status = "success";
      state.newItem = action.payload;
    })
    builder.addCase(createNewItem.rejected, (state) => {
      state.status = "failed";
    })
  }

})

export default newItemSlice.reducer;