import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { store, initialValues, categoriesStore, initialState } from "../data";


const stockSlice = createSlice({
  name: "stock",
  initialState,
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
