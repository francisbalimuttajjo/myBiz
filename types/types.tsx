import React from "react";

//bottom tabs
export enum MainRoutes {
  HomePage = "Home",
  ProfilePage = "Profile",
  TransactionsPage = "Transactions",
  MorePage = "More",
}
//cart /buttonProps
export type BtnProps = {
  btn: string;
  changeToCash: () => void;
  changeToCredit: () => void;
};

//cash
export type CashProps = {
  handleCash: (val: string) => void;
  change: number;
};

export type CartSummaryProps = {
  discount: number;
  itemsPrice: number;
  grandTotal: number;
};
//categories
type ItemProps = {
  title: string;
  id: number;
};
//date picker props
export type DatePickerProps = {
  isDatePickerVisible: boolean;
  showDatePicker: () => void;
  hideDatePicker: () => void;
  handleConfirm: (date: Date) => void;
  date: string;
};

export type CategoryProps = {
  item: ItemProps;
  NavigationProps: {
    navigate: (route: string, params: { item: ItemProps }) => void;
  };
};
//components
//wrapper
export type WrapperProps = {
  children: React.ReactNode;
};
//search
export type SearchProps = {
  searchQuery: string;
  onChangeSearch: (a: string) => void;
  placeholder: string;
  infoMsg?: string;
};
//button
export type ButtonProps = {
  title: string;
  submit: () => void;
  loading: boolean;
};

//

//form
//input componen
export type InputProps = {
  placeholder?: string;
  title: string;
  numeric?: boolean;
  required?: boolean;
};

//item
export type Item = {
  id: number;
  image?: string;
  name: string;
  sellingCurrency: string;
  buyingCurrency: string;
  sellingPrice: number | string;
  buyingPrice: number | string;
  description: string;
  stock: number | string;
  category: string;
  supplier: string;
  packaging: string;
  isReturnable: boolean;
};

//new stock
export type FormProps = {
  initialValues: Item;
  btn_title: string;

  loading: boolean;
  handleSubmit: (a: FormProps["initialValues"]) => void;
};

////priceComponent.tsx/components/form
export type PriceComponentProps = {
  required?: boolean;
  title: string;
  error?: string;
  currency: string;
  price: number | string;
  setPrice: (val: number) => void;
};

////select.tsx/components/form
export type SelectProps = {
  error?: string;
  categoryValue: string;
};

//switch.tsx/components/home
export type SwitchProps = {
  isEnabled: boolean;
  toggleSwitch: () => void;
};
//

//Headeer.tsx/components/home
export type HeaderProps = {
  user: { firstName: string; lastName: string; image?: string };
};

//navigation
export type TabStackParams = {
  Home: undefined;
  Profile: undefined;
  Transactions: undefined;
  More: undefined;
};

//segment.tsx/components/home
export type SegmentProps = {
  first_icon: string;
  second_icon: string;
  first_title: string;
  second_title: string;
};

//tool tip
export interface ToolTipProps {
  openToolTip: () => void;
  visible: boolean;
  closeToolTip: () => void;
}
//nameStockItemProps
export type StockItemProps = {
  cartItem?: boolean;
  item: Item;
  handlePress: (a: number) => void;
};
export type NavigationProps = {
  navigate: (route: string, params?: { id?: number }) => void;
  goBack: () => void;
};

//
export type CashItemProps = {
  item: {
    Amount: number | string;
    Category: string;
    entryDate: string | Date;
    itemTime: string | Date;
    Remark: string;
    type: string;
    id: number;
    paymentMode: string;
  };
};

//floating label
export type FloatingLabelProps = {
  label: string;
  value: string;
  error?: boolean;
  onChangeText: (a: string) => void;
  keyboard?: boolean;
  isAmount?: boolean;
  type: string;
};

export type mainStackParams = {
  Stock: undefined;
  CreditBook: undefined;
  CashBook: undefined;
  Purchases: undefined;
  entryDetails: { id: undefined };
  editEntry: { id: undefined };
  CashInEntry: undefined;
  CashOutEntry: undefined;
  Cart: undefined;
  home: undefined;
  Sales: undefined;
  Expenses: undefined;
  login:undefined
  Expense: undefined;
  Category: undefined;
  editStock: undefined;
  camera: undefined;
  categoriesEdit: { item: { title: undefined; id: undefined } };
  Details: {
    id: undefined;
  };
  New: undefined;
};
//stock stockSlice
export type InitialState = {
  loading: boolean;
  infoMsg: string;
  editable: number;
  isEditing: boolean;
  initialValues: Item;
  availableStock: Array<Item>;
  store: Array<Item>;
  categories: Array<{ title: string; value: string; id: number }>;
  categoriesStore: Array<{ title: string; value: string; id: number }>;
  cart: Array<{ item: Item; qty: number }>;
 
  error: string;
};
//
export type CashBookFormProps = {
  initialValues: {
    Amount: string;
    Remark: string;
    Category: string;
    type: string;
    itemTime: Date | string;
    itemDate: Date | string;
    paymentMode: string;
  };
  categories: Array<{ title: string; value: string; id: number }>;
  editing?: boolean;
};

export type PickerComponentProps = {
  error?: string;
  categories: CashBookFormProps["categories"];
  initialValues: CashBookFormProps["initialValues"];
};
