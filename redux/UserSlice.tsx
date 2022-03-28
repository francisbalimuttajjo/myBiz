import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const user = {
    firstName: "bafra",
    lastName:'francis',
  imageSrc:
    "https://storage.googleapis.com/download/storage/v1/b/task-tracker-336811.appspot.com/o/%2Fusers%2Fimgs%2Fuser-61d5e487b45306781f0cea46-1642267623054.jpeg?generation=1642267623313359&alt=media",
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    user,
  },
  reducers: {
    setMessage(state, action: PayloadAction<string>) {
      //   state.message = action.payload
    },
  },
});

// export const { setMessage } = userSlice.actions
export default userSlice.reducer;
