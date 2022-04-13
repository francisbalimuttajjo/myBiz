import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const image =
  "https://storage.googleapis.com/download/storage/v1/b/task-tracker-336811.appspot.com/o/%2Fusers%2Fimgs%2Fuser-61d5e487b45306781f0cea46-1642267623054.jpeg?generation=1642267623313359&alt=media";

const stock = [
  {
    _id: "1",
    image,
    name: "pencils",
    buyingCurrency: "usd",
    sellingCurrency: "ksh",
    buyingPrice: "900",
    sellingPrice: "300",
    description: "the latest chinese brabd",
    stock: "300",
    supplier: "mayadnja",
    isReturnable: true,
    packaging: "one",
    category: "stationery",
  },
  {
    _id: "2",
    name: "books",
    buyingCurrency: "ugx",
    sellingCurrency: "ugx",
    sellingPrice: "300",
    image: undefined,
    description: "the latest chinese brabd",
    stock: "100",
    buyingPrice: "9200",
    isReturnable: false,
    packaging: "dozens",
    supplier: "mayansssja",
    category: "books",
  },
  {
    _id: "3",
    name: "chalk",
    supplier: "mayssanja",
    buyingCurrency: "ugx",
    sellingCurrency: "usd",
    sellingPrice: "30090",
    buyingPrice: "90",
    description: "new stock",
    stock: "10000",
    isReturnable: false,
    image,
    packaging: "box",
    category: "food",
  },
  {
    _id: "4",
    name: "chalkie",
    buyingCurrency: "ksh",
    sellingCurrency: "ugx",
    description: "new stock",
    stock: "10000",
    buyingPrice: "2900",
    isReturnable: false,
    sellingPrice: "12000",
    packaging: "box",
    category: "groceries",
    supplier: "mayanjadjk",
    image: undefined,
  },
  {
    _id: "5",
    name: "chalked",
    buyingCurrency: "ugx",
    sellingCurrency: "ksh",
    sellingPrice: "300",

    buyingPrice: "9002",
    description: "new stock",
    stock: "10000",
    supplier: "mayanjall",
    isReturnable: true,
    packaging: "box",
    category: "stationery",
    image: undefined,
  },
  {
    _id: "6",
    name: "chalk",
    buyingCurrency: "ugx",
    sellingCurrency: "usd",

    supplier: "mayaeenja",
    description: "new stock",
    stock: "10000",
    buyingPrice: " 3900",
    sellingPrice: "12000",
    isReturnable: true,
    packaging: "box",
    category: "food",
    image: undefined,
  },
  {
    _id: "7",
    name: "chalker",
    buyingCurrency: "ugx",
    sellingCurrency: "ugx",
    description: "new stock",
    stock: "10000",
    sellingPrice: "12000",
    isReturnable: false,
    packaging: "box",
    buyingPrice: "9400",
    category: "stationery",
    supplier: "mayanja",
    image: undefined,
  },
  {
    _id: "8",
    name: "tv",
    buyingCurrency: "ugx",
    sellingCurrency: "ugx",
    buyingPrice: "3900",

    description: "new stock",
    stock: "190000",
    sellingPrice: "12000",
    isReturnable: true,
    packaging: "box",
    category: "groceries",
    supplier: "bafra",
    image: undefined,
  },
  {
    _id: "9",
    name: "face",
    buyingCurrency: "ugx",
    sellingCurrency: "ugx",
    sellingPrice: "300",

    buyingPrice: "900",
    description: "new stock",
    stock: "1300",
    isReturnable: false,
    packaging: "box",
    category: "food",
    supplier: "mayanja",
    //  image:"",
  },
];

const initialValues = {
  _id: "",
  name: "",
  description: "",
  category: "",
  isReturnable: false,
  stock: "0",
  buyingPrice: "0",
  sellingPrice: "0",
  image: "",
  supplier: "",
  buyingCurrency: "ugx",
  sellingCurrency: "ugx",
  packaging: "",
};

const categories = [
  { title: "Choose Category  *", value: "", id: "0" },
  { title: "food", value: "food", id: "09" },
  { title: "groceries", value: "groceries", id: "80" },
  { title: "stationery", value: "stationery", id: "090" },
];
const store = stock;
const categoriesStore = categories;
const stockSlice = createSlice({
  name: "stock",
  initialState: {
    availableStock:store,
    loading:false,
    cart: [],
    initialValues,
    displaySearchBar: store.length === 0 ? false : true,
    displayCategoriesSearchBar: categoriesStore.length === 0 ? false : true,
    infoMsg: "",
    categories: categoriesStore,
    isEditing: false,
    editable: "",
  },
  reducers: {
    //filterStock(state, action: PayloadAction<string>) {
    addImage(state, action: PayloadAction<{ image: string }>) {
      state.initialValues.image = action.payload.image;
    },
    editImage(state, action: PayloadAction<{ id: string; url: string }>) {
      const index = state.availableStock.findIndex(
        (el) => el._id === action.payload.id
      );
      state.availableStock[index].image = action.payload.url;
    },

    changeToEditing(state, action: PayloadAction<{ id: string }>) {
      state.isEditing = true;
      state.editable = action.payload.id;
    },
    disableEditing(state) {
      state.isEditing = false;
      state.editable = "";
    },
    addToCart(state, action: PayloadAction<{ id: string }>) {},

    filterStock(state, action: PayloadAction<string>) {
      state.infoMsg = "";
      if (action.payload === "") {
        state.availableStock = store;
      } else {
        state.availableStock = store;
        const searchResult = state.availableStock.filter(
          (el) =>
            el.category.includes(action.payload) ||
            el.name.includes(action.payload)
        );
        if (searchResult.length > 0) {
          state.infoMsg = `Search Results : ${searchResult.length}`;
        } else {
          state.infoMsg = `There is no result for the search ${action.payload}`;
        }
        state.availableStock = searchResult;
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

export const {
  filterStock,
  addImage,
  filterCategories,
  changeToEditing,
  disableEditing,
  addToCart,
  editImage,
} = stockSlice.actions;
export default stockSlice.reducer;
