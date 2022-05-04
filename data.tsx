import { CashItemProps, InitialState, Item } from "./types/types";




const cashTransactions: Array<CashItemProps["item"]> = [
  {
    Amount: 1200,
    Category: "labour",
    id: 0,
    entryDate: "2022-04-20T05:35:55.155Z",
    itemTime: "2022-04-26T14:55:55.155Z",
    Remark: "book keeping",
    type: "cash-in",
    paymentMode: "cash",
  },
  {
    Amount: 120,
    Category: "salaries",
    id:1,
    entryDate: "2022-01-20T01:35:55.155Z",
    itemTime: "2022-01-26T14:55:55.155Z",
    Remark: "book ",
    type: "cash-out",
    paymentMode: "online",
  },
  {
    Amount: 120,
    Category: "others",
    id: 2,
    entryDate: "2022-12-20T05:35:55.155Z",
    itemTime: "2022-12-26T20:01:55.155Z",
    Remark: "book keeping",
    type: "cash-out",
    paymentMode: "online",
  },
  {
    Amount: 1200,
    Category: "salaries",
    id: 3,
    entryDate: "2022-12-20T05:35:55.155Z",
    itemTime: "2022-12-26T20:01:55.155Z",
    Remark: "book keeping",
    type: "cash-out",
    paymentMode: "cash",
  },
  {
    Amount: 1200,
    Category: "labour",
    id: 4,
    entryDate: "2022-12-20T05:35:55.155Z",
    itemTime: "2022-12-26T20:01:55.155Z",
    Remark: "book keeping",
    type: "cash-in",
    paymentMode: "online",
  },
];


export {
  
  cashTransactions,
  
};
