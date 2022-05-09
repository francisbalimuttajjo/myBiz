import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  firstName: string;
  lastName: string;
  image: string;
  email: string;
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: { email: "", firstName: "", lastName: "", image: "" },
    isLoggedIn: false,
  },
  reducers: {
    setMessage(state, action: PayloadAction<string>) {
      //   state.message = action.payload
    },
    addUser(
      state,
      action: PayloadAction<{
        user: User;
      }>
    ) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
