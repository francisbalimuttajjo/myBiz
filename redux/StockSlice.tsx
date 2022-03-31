import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const image =
  "https://storage.googleapis.com/download/storage/v1/b/task-tracker-336811.appspot.com/o/%2Fusers%2Fimgs%2Fuser-61d5e487b45306781f0cea46-1642267623054.jpeg?generation=1642267623313359&alt=media";

const stock = [
  {
    _id: "52625",
    image,
    name: "pencils",
    currency: "ugx",
    description: "the latest chinese brabd",
    stock: 300,
    sellingPrice: 300,
    packaging: "one",
    category: "stationery",
  },
  {
    _id: "52625i",
    name: "books",
    currency: "usd",
    description: "the latest chinese brabd",
    stock: 100,
    sellingPrice: 12000,
    packaging: "dozens",
    category: "sta",
  },
  {
    _id: "52625tey",
    name: "chalk",
    currency: "ksh",
    description: "new stock",
    stock: 10000,
    image,
    sellingPrice: 12000,
    packaging: "box",
    category: "bbhs",
  },
  {
    _id: "5262sf5tey",
    name: "chalk",
    currency: "ksh",
    description: "new stock",
    stock: 10000,
    sellingPrice: 12000,
    packaging: "box",
    category: "bbhs",
  },
  {
    _id: "5262xvx5tey",
    name: "chalk",
    currency: "ksh",
    description: "new stock",
    stock: 10000,
    sellingPrice: 12000,
    packaging: "box",
    category: "bbhs",
  },
  {
    _id: "52625tssfsbbey",
    name: "chalk",
    currency: "ksh",
    description: "new stock",
    stock: 10000,
    sellingPrice: 12000,
    packaging: "box",
    category: "bbhs",
  },
  {
    _id: "52625tsbbey",
    name: "chalk",
    currency: "ksh",
    description: "new stock",
    stock: 10000,
    sellingPrice: 12000,
    packaging: "box",
    category: "bbhs",
  },
];

const stockSlice = createSlice({
  name: "stock",
  initialState: {
    stock,
    loading: false ,
  },
  reducers: {
    setMessage(state, action: PayloadAction<string>) {
      //   state.message = action.payload
    },
  },
});

// export const { setMessage } = userSlice.actions
export default stockSlice.reducer;
