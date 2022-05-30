import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";

const reducer = combineReducers({
  count: countSlice,
});

export default configureStore({
  reducer: reducer,
});

