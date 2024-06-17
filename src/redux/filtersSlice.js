import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    status: "",
  },
  reducers: {
    statusFilters: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { statusFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

export const selectNameFilter = (state) => state.filters.status;
