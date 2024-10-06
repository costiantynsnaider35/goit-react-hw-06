import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    selectFilter: (state, action) => {
      state.filters.name = action.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { selectFilter } = slice.actions;

export const selectNameFilter = (state) => state.filter.filters.name;
