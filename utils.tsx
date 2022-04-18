import { CashItemProps, InitialState } from "./types/types";

const getTotal = (arr: InitialState["cart"]) => {
  const vals = arr.map((el) => el.qty);
  return vals.reduce((a, b) => a + b, 0);
};

type Props = { qty: number; price: number };

const getTotalSum = (arr: InitialState["cart"]) => {
  let arr1: Array<Props> = [];
  for (let i = 0; i < arr.length; i++) {
    arr1.push({ qty: arr[i].qty, price: +arr[i].item.sellingPrice });
  }
  const arrayOfPrices = arr1.map((el) => el.qty * el.price);
  return arrayOfPrices.reduce((a, b) => a + b, 0);
};

const get_stock_Index = (arr: InitialState["availableStock"], k: string) =>
  arr.findIndex((el) => el._id === k);

const get_cart_index = (arr: InitialState["cart"], k: string) =>
  arr.findIndex((val) => val.item._id === k);

const getDifference = (arr: Array<CashItemProps["item"]>) => {
  let income: Array<CashItemProps["item"]> = [];
  let expense: Array<CashItemProps["item"]> = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].type === "cash-in") {
      income.push(arr[i]);
    }
    expense.push(arr[i]);
  }
  const incomes_array = income.map((el) => el.amount);
  const expenses_array = expense.map((el) => el.amount);
  const income_totals = incomes_array.reduce((a, b) => a + b, 0);
  const expenses_totals = expenses_array.reduce((a, b) => a + b, 0);
  return [income_totals, expenses_totals];
};

export {
  getTotal,
  getTotalSum,
  get_cart_index,
  get_stock_Index,
  getDifference,
};
