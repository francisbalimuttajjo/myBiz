import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { InitialState, Item } from "../../types/types";
import { url } from "../../utils";

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

export const getCategories = createAsyncThunk(
  "items/getCategories",
  async ({ user, token }: { user: string; token: string }) => {
    try {
      const response = await axios.post(
        `${url}/api/v1/productCategories/getAll`,
        { user },
        { headers: { "Content-Type": "application/json", token } }
      );

      return response.data;
    } catch (err: any) {
      return err.response.data;
    }
  }
);

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
