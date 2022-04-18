import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cashTransactions } from "../data";

const stockSlice = createSlice({
  name: "cashbook",
  initialState: {
    cashTransactions,
  },
  reducers: {
    filter(state, action: PayloadAction<{ id: string }>) {},
  },
});

export const { filter } = stockSlice.actions;
export default stockSlice.reducer;
