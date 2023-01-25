import { Item } from "../../types/types";

export type Transaction = {
  items: Array<{ item: number; quantity: number }>;
  user: string;
  client: string;
  type: string;
  paymentDate: string | null;
  discount: number;
  cashReceived: number;
  cashPending: number;
  createdAt: string;
  id: number;
};
export type Sale = {
  id: number;
  price: number;
  quantity: number;
  total_price: number;
  client: string;
  item: Item;
  createdAt: string;
};

export type InitialState = {
  user: { firstName: string; lastName: string; image: string; email: string };
  transactions: Array<Transaction>;
  sales: Array<Sale>;
  isLoggedIn: boolean;
  editingProfilePic: boolean;
  loading: boolean;
  error: string;
  token: string;
};

const initialState: InitialState = {
  user: { email: "", firstName: "", lastName: "", image: "" },
  transactions: [],
  sales: [],
  isLoggedIn: false,
  loading: false,
  editingProfilePic: true,
  error: "",
  token: "",
};

export { initialState };
