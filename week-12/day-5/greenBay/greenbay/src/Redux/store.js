import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./slices/session";

export const store = configureStore({
  reducer: {
    session: sessionReducer,
  },
});
