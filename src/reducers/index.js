import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";
import universitySlice from "./universitySlice";

const reducer = combineReducers({
  count: countSlice,
  university: universitySlice
});

export default configureStore({
  reducer: reducer,
});

