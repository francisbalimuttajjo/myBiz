import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

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
};

const initialState: InitialState = {
  user: { email: "", firstName: "", lastName: "", image: "" },
  transactions: [],
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
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
