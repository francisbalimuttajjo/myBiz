import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const image =
  "https://storage.googleapis.com/download/storage/v1/b/task-tracker-336811.appspot.com/o/%2Fusers%2Fimgs%2Fuser-61d5e487b45306781f0cea46-1642267623054.jpeg?generation=1642267623313359&alt=media";
const categories = [
  { title: "bafra", id: "0" },
  { title: "bafra", id: "1" },
  { title: "bafra", id: "21" },
  { title: "bafra", id: "01" },
  { title: "bafra", id: "11" },
  { title: "bafra", id: "202" },
  { title: "bafra", id: "20" },
  { title: "bafra soogss", id: "12" },
  { title: "bafra", id: "22" },
  { title: "bafra", id: "00" },
  { title: "bafra", id: "100" },
  { title: "bafra", id: "200" },
];
const stock = [
  {
    _id: "1",
    image,
    name: "pencils",
    currency: "ugx",
    description: "the latest chinese brabd",
    stock: 300,
    sellingPrice: 300,
    packaging: "one",
    category: "item",
  },
  {
    _id: "2",
    name: "books",
    currency: "usd",
    description: "the latest chinese brabd",
    stock: 100,
    sellingPrice: 12000,
    packaging: "dozens",
    category: "sta",
  },
  {
    _id: "3",
    name: "chalk",
    currency: "ksh",
    description: "new stock",
    stock: 10000,
    image,
    sellingPrice: 12000,
    packaging: "box",
    category: "item",
  },
  {
    _id: "4",
    name: "chalk",
    currency: "ksh",
    description: "new stock",
    stock: 10000,
    sellingPrice: 12000,
    packaging: "box",
    category: "goods",
  },
  {
    _id: "5",
    name: "chalk",
    currency: "ksh",
    description: "new stock",
    stock: 10000,
    sellingPrice: 12000,
    packaging: "box",
    category: "items",
  },
  {
    _id: "6",
    name: "chalk",
    currency: "ksh",
    description: "new stock",
    stock: 10000,
    sellingPrice: 12000,
    packaging: "box",
    category: "goods",
  },
  {
    _id: "7",
    name: "chalk",
    currency: "ksh",
    description: "new stock",
    stock: 10000,
    sellingPrice: 12000,
    packaging: "box",
    category: "sta",
  },
  {
    _id: "8",
    name: "tv",
    currency: "ksh",
    description: "new stock",
    stock: 10000,
    sellingPrice: 12000,
    packaging: "box",
    category: "sta",
  },
  {
    _id: "9",
    name: "face",
    currency: "ksh",
    description: "new stock",
    stock: 10000,
    sellingPrice: 12000,
    packaging: "box",
    category: "sta",
  },
];

const initialValues = {
  name: "",
  description: "",
  categories: "",
  isReturnable: false,
  stock: "0",
  buyingPrice: "0",
  sellingPrice: "90",
  image: "",
  supplier: "",
  buyingCurrency: "ugx",
  sellingCurrency: "ugx",
};
const store = stock;
const categoriesStore = categories;
const stockSlice = createSlice({
  name: "stock",
  initialState: {
    stock: store,
    loading: false,
    initialValues,
    displaySearchBar: store.length === 0 ? false : true,
    displayCategoriesSearchBar: categoriesStore.length === 0 ? false : true,
    infoMsg: "",
    categories: categoriesStore,
  },
  reducers: {
    //filterStock(state, action: PayloadAction<string>) {
    addImage(state, action: PayloadAction<string>) {
      state.initialValues.image = action.payload;
    },
    filterStock(state, action: PayloadAction<string>) {
      state.infoMsg = "";
      if (action.payload === "") {
        state.stock = store;
      } else {
        state.stock = store;
        const searchResult = state.stock.filter(
          (el) =>
            el.category.includes(action.payload) ||
            el.name.includes(action.payload)
        );
        if (searchResult.length > 0) {
          state.infoMsg = `Search Results : ${searchResult.length}`;
        } else {
          state.infoMsg = `There is no result for the search ${action.payload}`;
        }
        state.stock = searchResult;
      }
    },
    filterCategories(state, action: PayloadAction<string>) {
      state.infoMsg = "";
      if (action.payload === "") {
        state.categories = categoriesStore;
      } else {
        state.categories = categoriesStore;
        const searchResult = state.categories.filter((el) =>
          el.title.includes(action.payload)
        );
        if (searchResult.length < 1) {
          state.infoMsg = `Category ${action.payload} is not available`;
        }
        state.categories = searchResult;
      }
    },
  },
});

export const { filterStock, addImage, filterCategories } = stockSlice.actions;
export default stockSlice.reducer;
