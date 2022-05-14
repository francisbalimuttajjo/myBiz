import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { InitialState, Item } from "../../types/types";

const initialValues: Item = {
  id: 0,
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

export const getItems = createAsyncThunk(
  "items/getItems",
  async ({ email, token }: { email: string; token: string }) => {
    try {
      const response = await axios.post(
        "http://192.168.43.96:5000/api/v1/items/user",
        { user: email },
        { headers: { "Content-Type": "application/json", token } }
      );

      return response.data;
    } catch (err: any) {
      return err.response.data;
    }
  }
);
export const getCategories = createAsyncThunk(
  "items/getCategories",
  async ({ user }: { user: string }) => {
    try {
      const response = await axios.post(
        "http://192.168.43.96:5000/api/v1/categories/getAll",
        { user }
      );

      return response.data;
    } catch (err: any) {
      return err.response.data;
    }
  }
);

// const categoriesStore = categories;
const initialState: InitialState = {
  availableStock: [],
  loading: false,
  cart: [],
  store: [],
  initialValues,
  categoriesStore: [],
  categories: [],
  infoMsg: "",
  isEditing: false,
  editable: -1,
  error: "",
};

export { initialState };
