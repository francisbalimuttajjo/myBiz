import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../utils";
import { InitialState, initialState } from "./others/user";

export const getTransactions = createAsyncThunk(
  "transactions/getTransactions",
  async ({ user, token }: { user: string; token: string }) => {
    try {
      const response = await axios.post(
        `${url}/api/v1/transactions/getAll`,
        { user },
        { headers: { "Content-Type": "application/json", token } }
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
        `${url}/api/v1/sales/getAll`,
        { user },
        { headers: { "Content-Type": "application/json", token } }
      );

      return response.data;
    } catch (err: any) {
      return err.response.data.data;
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

    addToken(
      state,
      action: PayloadAction<{
        token: any;
      }>
    ) {
      state.token = action.payload.token;
    },
    editProfileImage(
      state,
      action: PayloadAction<{
        image: string;
      }>
    ) {
      state.user.image = action.payload.image;
    },
    changeToEditingProfileImage(state) {
      state.editingProfilePic = true;
    },
    disableEditingProfileImage(state) {
      state.editingProfilePic = false;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const {
  addUser,

  addToken,
  logout,
  editProfileImage,
  changeToEditingProfileImage,
  disableEditingProfileImage,
} = userSlice.actions;
export default userSlice.reducer;
