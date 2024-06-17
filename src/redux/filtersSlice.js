import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    status: "",
  },
  reducers: {
    statusFilters: {
      reducer(state, action) {
        state.status = action.payload;
      },
      prepare(value) {
        return {
          payload: value,
          meta: {
            ga: true,
          },
        };
      },
    },
  },
});

export const { statusFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

export const selectNameFilter = (state) => state.filters.status;
