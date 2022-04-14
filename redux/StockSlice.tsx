import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { store, categoriesStore, initialState } from "../data";

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<{ id: string }>) {
      //getting the item from stockSlice
      let index = state.availableStock.findIndex(
        (el) => el._id === action.payload.id
      );
      //checking if cart is empty
      if (state.cart.length === 0) {
        //if empty push that item in
        state.cart.push({ item: state.availableStock[index], qty: 1 });
      } else {
        //if not empty
        let existing_item_index = state.cart.findIndex(
          (el) => el.item._id === action.payload.id
        );
        console.log({ existing_item_index });
        //check if it exists in cartItem
        if (existing_item_index >= 0) {
          //if there add one to its qty
          const existingItems = [...state.cart];
          existingItems[existing_item_index].qty++;
          state.cart = existingItems;
        } else {
          //if not add it there
          const new_cart = [
            ...state.cart,
            { item: state.availableStock[index], qty: 1 },
          ];
          state.cart = new_cart;
        }
      }

   
    },
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
