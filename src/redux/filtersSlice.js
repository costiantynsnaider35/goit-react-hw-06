import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",

};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    selectFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { selectFilter } = slice.actions;

export const selectNameFilter = (state) => state.filter.name;
