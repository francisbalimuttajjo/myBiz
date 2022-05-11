import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { cashTransactions } from "../data";
import { CashItemProps as Props, CashBookFormProps } from "../types/types";

const categories: Array<{ title: string; value: string; id: number }> = [
  { title: "Choose Category  *", value: "", id: 0 },
  { title: "labour", value: "labour", id: 1 },
  { title: "salaries", value: "salaries", id: 2 },
  { title: "others", value: "others", id: 3 },
  { title: "food", value: "food", id: 4 },
];

export const getTransactions = createAsyncThunk(
  "transactions/getTransactions",
  async ({ user }: { user: string }) => {
    try {
      const response = await axios.post(
        "http://192.168.43.96:5000/api/v1/transactions/getAll",
        { user }
      );

      return response.data;
    } catch (err: any) {
      return err.response.data;
    }
  }
);
const store: Array<Props["item"]> = cashTransactions;
const stockSlice = createSlice({
  name: "cashbook",

  initialState: {
    cashTransactions,
    store: cashTransactions,
    categories,
  },
  

  reducers: {
    filterCashItems(state, action: PayloadAction<string>) {
      if (action.payload === "") {
        state.cashTransactions = store;
      } else {
        state.cashTransactions = store;
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
