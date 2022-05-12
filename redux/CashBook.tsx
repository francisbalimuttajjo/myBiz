import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialState, getCashItems } from "./others/cashbook";

const stockSlice = createSlice({
  name: "cashbook",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getCashItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCashItems.rejected, (state) => {
        state.loading = false;
        state.error = "something went wrong";
      })
      .addCase(getCashItems.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        if (action.payload.status === "success") {
          state.cashTransactions = action.payload.data;

          state.store = action.payload.data;
        }
      });
  },

  reducers: {
    filterCashItems(state, action: PayloadAction<string>) {
      if (action.payload === "") {
        state.cashTransactions = state.store;
      } else {
        state.cashTransactions = state.store;
        const searchResult = state.cashTransactions.filter(
          (el) =>
            el.Category.includes(action.payload) ||
            el.Remark.includes(action.payload) ||
            el.paymentMode.includes(action.payload)
        );
        state.cashTransactions = searchResult;
      }
    },
  },
});

export const { filterCashItems } = stockSlice.actions;
export default stockSlice.reducer;
