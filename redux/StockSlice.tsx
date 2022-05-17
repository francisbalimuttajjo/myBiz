import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { get_cart_index, get_stock_Index } from "../utils";
import { Item } from "../types/types";
import { initialState, getCategories } from "./others/stock";

const stockSlice = createSlice({
  name: "stock",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategories.rejected, (state) => {
        state.loading = false;
        state.error = "something went wrong";
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;

        if (action.payload.status === "success") {
          state.error = "";

          state.categoriesStore = action.payload.data;
          state.categories = state.categoriesStore;

          const stockItems = action.payload.data.map(
            (el: { stockItems: Array<Item> }) => el.stockItems
          );

          state.store = stockItems.flat();
          state.availableStock = state.store;
        }
      });
  },
  reducers: {
    removeFromCart(state, action: PayloadAction<{ id: number }>) {
      const stock_index = get_stock_Index(
        state.availableStock,
        action.payload.id
      );
      const cart_index = get_cart_index(state.cart, action.payload.id);

      //update stock with that
      let new_stock = [...state.availableStock];
      new_stock[stock_index].stock =
        +new_stock[stock_index].stock + state.cart[cart_index].qty;
      state.availableStock = new_stock;
      //remove from cart
      state.cart = state.cart.filter((el) => el.item.id !== action.payload.id);
    },

    addItem(state, action: PayloadAction<{ id: number }>) {
      //update available state
      const stock_index = get_stock_Index(
        state.availableStock,
        action.payload.id
      );
      let new_cart = [...state.cart];
      const cart_index = get_cart_index(new_cart, action.payload.id);

      //making sure u dont add stock beyond what is available in store
      if (state.store[stock_index].stock === new_cart[cart_index].qty) {
        return;
      } else {
        //reduce from cart
        new_cart[cart_index].qty++;
        state.cart = new_cart;
        let new_stock: any = [...state.availableStock];
        new_stock[stock_index].stock--;
        state.availableStock = new_stock;
      }
    },

    reduceItem(state, action: PayloadAction<{ id: number }>) {
      let new_cart = [...state.cart];
      const cart_index = get_cart_index(new_cart, action.payload.id);

      let new_stock: any = [...state.availableStock];
      const stock_index = get_stock_Index(new_stock, action.payload.id);
      //dont reduce beyond 0
      if (new_cart[cart_index].qty === 0) {
        new_stock[stock_index].qty = 0;
        state.availableStock = new_stock;
        // return;
      } else {
        //reduce from cart

        new_cart[cart_index].qty--;
        state.cart = new_cart;

        //update available state

        new_stock[stock_index].stock++;
        state.availableStock = new_stock;
      }
    },

    addToCart(state, action: PayloadAction<{ id: number }>) {
      //getting the item from stock
      const index = get_stock_Index(state.availableStock, action.payload.id);
      //checking if stock is available
      if (state.availableStock[index].stock > 0) {
        //reducing available stock by one
        const new_stock: any = [...state.availableStock];

        new_stock[index].stock--;
        state.availableStock = new_stock;

        //checking if cart is empty
        if (state.cart.length === 0) {
          //if empty push that item in
          state.cart = [
            ...state.cart,
            { item: state.availableStock[index], qty: 1 },
          ];
        } else {
          //if not empty
          const existing_item_index = get_cart_index(
            state.cart,
            action.payload.id
          );

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
      } else {
        return;
      }
    },
    addImage(state, action: PayloadAction<{ image: string }>) {
      state.initialValues.image = action.payload.image;
    },
    resetCart(state) {
      state.cart = [];
    },
    editImage(state, action: PayloadAction<{ id: number; url: string }>) {
      const index = get_stock_Index(state.availableStock, action.payload.id);
      state.availableStock[index].image = action.payload.url;
    },

    changeToEditing(state, action: PayloadAction<{ id: number }>) {
      state.isEditing = true;

      state.editable = action.payload.id;
    },
    disableEditing(state) {
      state.isEditing = false;
      state.editable = -1;
    },

    filterStock(state, action: PayloadAction<string>) {
      state.infoMsg = "";
      if (action.payload === "") {
        state.availableStock = state.store;
      } else {
        state.availableStock = state.store;
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
        state.categories = state.categoriesStore;
      } else {
        state.categories = state.categoriesStore;
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
  resetCart,
  addImage,
  filterCategories,
  changeToEditing,
  disableEditing,
  addToCart,
  reduceItem,
  removeFromCart,
  addItem,
  editImage,
} = stockSlice.actions;
export default stockSlice.reducer;
