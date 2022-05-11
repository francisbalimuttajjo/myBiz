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

type InitialState = {
  user: { firstName: string; lastName: string; image: string; email: string };
  transactions: Array<Transaction>;
  isLoggedIn: boolean;
  loading: boolean;
  error: string;
};

const initialState: InitialState = {
  user: { email: "", firstName: "", lastName: "", image: "" },
  transactions: [],
  isLoggedIn: false,
  loading: false,
  error: "",
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
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  extraReducers(builder) {
    builder
      .addCase(getTransactions.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getTransactions.rejected, (state, action) => {
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
  },
});

export const { addUser, addTransactions } = userSlice.actions;
export default userSlice.reducer;
