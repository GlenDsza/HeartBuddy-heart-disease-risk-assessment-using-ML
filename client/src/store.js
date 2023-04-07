import { configureStore } from "@reduxjs/toolkit";
import { infoReducer } from "./redux";

export const store = configureStore({
  reducer: {
    info: infoReducer,
  },
});
