import { configureStore } from "@reduxjs/toolkit";
import { infoReducer, userReducer } from "./redux";

export const store = configureStore({
  reducer: {
    user: userReducer,
    info: infoReducer,
  },
});
