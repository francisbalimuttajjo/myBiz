import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cashTransactions } from "../data";
import { CashItemProps as Props } from "../types/types";

const store: Array<Props["item"]> = cashTransactions;
const stockSlice = createSlice({
  name: "cashbook",
  initialState: {
    cashTransactions,
    store:cashTransactions
  },

  reducers: {
    filterCashItems(state, action: PayloadAction<string>) {
      if (action.payload === "") {
        state.cashTransactions = store;
      } else {
        state.cashTransactions = store;
        const searchResult = state.cashTransactions.filter(
          (el) =>
            el.category.includes(action.payload) ||
            el.title.includes(action.payload) ||
            el.paymentMode.includes(action.payload)
        );
        state.cashTransactions = searchResult;
      }
    },
  },
});

export const { filterCashItems } = stockSlice.actions;
export default stockSlice.reducer;
