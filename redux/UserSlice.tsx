import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export type Transaction = {
  items: Array<{ item: number; quantity: number }>;
  user: string;
  client: string;
  type: string;
  paymentDate: string | null;
  discount: number;
  cashReceived: number;
  cashPending: number;
  createdAt: string;
};
export type Sale = {
  id: number;
  price: number;
  quantity: number;
  total_price: number;
  client: string;
  item: string;
  createdAt: string;
};

type InitialState = {
  user: { firstName: string; lastName: string; image: string; email: string };
  transactions: Array<Transaction>;
  sales: Array<Sale>;
  isLoggedIn: boolean;
  loading: boolean;
  error: string;
  token: string;
};

const initialState: InitialState = {
  user: { email: "", firstName: "", lastName: "", image: "" },
  transactions: [],
  sales: [],
  isLoggedIn: false,
  loading: false,
  error: "",
  token: "",
};

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

export const getSales = createAsyncThunk(
  "sales/getSales",
  async ({ user, token }: { user: string; token: string }) => {
    try {
      const response = await axios.post(
        "http://192.168.43.96:5000/api/v1/sales/getAll",
        { user },
        { headers: { "Content-Type": "application/json", token } }
      );

      return response.data;
    } catch (err: any) {
      return err.response.data;
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  extraReducers(builder) {
    builder
      .addCase(getTransactions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTransactions.rejected, (state) => {
        state.loading = false;
        state.error = "something went wrong";
      })
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        if (action.payload.status === "success") {
          state.transactions = action.payload.data;
        }
      });
    builder
      .addCase(getSales.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSales.rejected, (state) => {
        state.loading = false;
        state.error = "something went wrong";
      })
      .addCase(getSales.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        if (action.payload.status === "success") {
          state.sales = action.payload.data;
        }
      });
  },
  reducers: {
    addUser(
      state,
      action: PayloadAction<{
        user: InitialState["user"];
      }>
    ) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    addTransactions(
      state,
      action: PayloadAction<{
        transactions: InitialState["transactions"];
      }>
    ) {
      state.transactions = action.payload.transactions;
    },
    addToken(
      state,
      action: PayloadAction<{
        token: any;
      }>
    ) {
      state.token = action.payload.token;
    },
  },
});

export const { addUser, addTransactions, addToken } = userSlice.actions;
export default userSlice.reducer;
