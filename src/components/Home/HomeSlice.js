import { createSlice } from "@reduxjs/toolkit";
import data from "../../data.json";

export const HomeSlice = createSlice({
  name: 'home',
  initialState: {
    brands: data.brands,
    brandDetails : []
  },
  reducers: {
    setBrandDetails : (state,actions) => {
      state.brandDetails = actions.payload
    }
  },
});

export const { setBrandDetails } = HomeSlice.actions
export default HomeSlice.reducer;
