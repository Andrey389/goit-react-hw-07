import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    statusFilters: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { statusFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
