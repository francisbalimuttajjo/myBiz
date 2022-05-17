import { CashItemProps, InitialState, Item } from "./types/types";

//props
type Props = { qty: number; price: number };
type Cart = Array<{
  item_id: number;
  quantity: number;
  price: number;
  item: string;
}>;

//props end

const getTotal = (arr: InitialState["cart"]) => {
  const vals = arr.map((el) => el.qty);
  return vals.reduce((a, b) => a + b, 0);
};

const getTotalSum = (arr: InitialState["cart"]) => {
  let arr1: Array<Props> = [];
  for (let i = 0; i < arr.length; i++) {
    arr1.push({ qty: arr[i].qty, price: +arr[i].item.sellingPrice });
  }
  const arrayOfPrices = arr1.map((el) => el.qty * el.price);
  return arrayOfPrices.reduce((a, b) => a + b, 0);
};

const get_stock_Index = (arr: InitialState["availableStock"], k: number) =>
  arr.findIndex((el) => el.id === k);

const get_cart_index = (arr: InitialState["cart"], k: number) =>
  arr.findIndex((val) => val.item.id === k);

const getDifference = (arr: Array<CashItemProps["item"]>) => {
  let income: Array<CashItemProps["item"]> = [];
  let expense: Array<CashItemProps["item"]> = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].type === "cash-in") {
      income.push(arr[i]);
    } else {
      expense.push(arr[i]);
    }
  }

  const incomes_array = income.map((el) => el.Amount);
  const expenses_array = expense.map((el) => el.Amount);
  const income_totals = incomes_array.reduce((a, b) => +a + +b, 0);
  const expenses_totals = expenses_array.reduce((a, b) => +a + +b, 0);
  return [income_totals, expenses_totals];
};

const getDate = (val: Date | string) => {
  let date = new Date(val);

  //getting time from string
  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  //removing seconds from time
  const splittedTime = time.split(":");
  const timeWithoutSeconds = `${splittedTime[0]}:${splittedTime[1]}`;

  return {
    date: date.toDateString(),
    time: timeWithoutSeconds,
  };
};

const getCartItems = (
  arr: Array<{ item: Item; qty: number }>,
  user: string
) => {
  let items: Array<{
    item_id: number;
    user: string;
    quantity: number;
    price: number;
  }> = [];

  arr.map((item) =>
    items.push({
      item_id: +item.item.id,
      user,
      quantity: item.qty,
      price: +item.item.sellingPrice,
    })
  );
  return items;
};

export {
  getTotal,
  getCartItems,
  getTotalSum,
  get_cart_index,
  get_stock_Index,
  getDifference,
  getDate,
};
