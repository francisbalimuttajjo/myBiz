import { InitialState } from "./types/types";
const getTotal = (arr: InitialState["cart"]) => {
  const vals = arr.map((el) => el.qty);
  return vals.reduce((a, b) => a + b, 0);
};

export { getTotal };
