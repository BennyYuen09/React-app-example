import { createSlice } from "@reduxjs/toolkit";

const initialData = {
  value: 0
};

const countSlice = createSlice({
  name: "count",
  initialState: initialData,
  reducers: {
    increment: (state, data) => {
      state.value += 1;
    },
  },
});

export const { increment } = countSlice.actions;

export default countSlice.reducer;

