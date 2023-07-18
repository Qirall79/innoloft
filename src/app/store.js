import { configureStore } from "@reduxjs/toolkit";
import infosReducer from "../features/stateSlice";

export const store = configureStore({
  reducer: {
    infos: infosReducer,
  },
});
