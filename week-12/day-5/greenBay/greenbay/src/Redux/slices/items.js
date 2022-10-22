import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../axios/api";
import { toast } from "react-toastify";

const initialState = {
  status: "idle",
  currentItem: {},
  items: [],
  messages: {},
};

export const fetchAllItems = createAsyncThunk(
  "items/fetchAllItems",
  async () => {
    const response = await api.get("/items");
    return response.data;
  }
);

export const addNewItem = createAsyncThunk(
  "items/addNewItem",
  async (itemData) => {
    try {
      await api.post("/item", itemData);
      const response = await api.get("/items");
      return response.data;
    } catch (error) {
      throw new Error(JSON.stringify(error.response.data));
    }
  }
);

export const itemsSlice = createSlice({
  name: "session",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllItems.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchAllItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(addNewItem.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addNewItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        toast.success(
          `Item ${JSON.stringify(action.payload)} successfully added`,
          {
            position: "bottom-left",
          }
        );
      })
      .addCase(addNewItem.rejected, (state, action) => {
        state.status = "failed";
        state.messages = JSON.parse(action.error.message);
        toast.error(`You failed to add item`, {
          position: "bottom-left",
        });
      });
  },
});

export default itemsSlice.reducer;
