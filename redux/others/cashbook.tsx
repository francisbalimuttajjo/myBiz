import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const categories: Array<{ title: string; value: string; id: number }> = [
  { title: "Choose Category  ", value: "", id: 0 },
  { title: "labour", value: "labour", id: 1 },
  { title: "salaries", value: "salaries", id: 2 },
  { title: "others", value: "others", id: 3 },
  { title: "food", value: "food", id: 4 },
];

export const getCashItems = createAsyncThunk(
  "items/getCashItems",
  async ({ user, token }: { user: string; token: string }) => {
    try {
      const response = await axios.post(
        "http://192.168.43.96:5000/api/v1/cashItem/getAll",
        { user },
        { headers: { "Content-Type": "application/json", token } }
      );

      return response.data;
    } catch (err: any) {
      return err.response.data;
    }
  }
);

type Transaction = {
  Amount: string;
  Category: string;
  id: number;
  entryDate: string;
  itemTime: string;
  Remark: string;
  type: "cash-in" | "cash-out";
  paymentMode: "cash" | "online";
};

type InitialState = {
  categories: Array<{ title: string; value: string; id: number }>;
  cashTransactions: Array<Transaction>;
  store: Array<Transaction>;
  loading: boolean;
  error: string;
};

const initialState: InitialState = {
  cashTransactions: [],
  store: [],
  categories,
  loading: false,
  error: "",
};

export { initialState };
