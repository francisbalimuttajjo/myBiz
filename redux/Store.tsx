import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import stockReducer from "./StockSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    stock: stockReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
