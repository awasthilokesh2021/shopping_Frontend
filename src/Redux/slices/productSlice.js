import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 👇 Async thunk for fetching products
export const getProducts = createAsyncThunk("products/get", async () => {
  const res = await axios.get("http://localhost:8000/getproducts");
  return res.data;
});

// 👇 Product slice
const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // simple error message
      });
  },
});

export default productSlice.reducer;
