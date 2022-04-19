import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import stockReducer from "./StockSlice";
import cashBookReducer from "./CashBook";

export const store = configureStore({
  reducer: {
    user: userReducer,
    stock: stockReducer,
    cashBook: cashBookReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
