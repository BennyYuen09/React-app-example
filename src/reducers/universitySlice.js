import { createSlice } from "@reduxjs/toolkit";

const initialData = {
  value: []
};

const universitySlice = createSlice({
  name: "university",
  initialState: initialData,
  reducers: {
    setUniversity: (state, data) => {
      state.value = data.payload;
    },
  },
});

export const { setUniversity } = universitySlice.actions;

export default universitySlice.reducer;

