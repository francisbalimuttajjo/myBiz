import React from "react";
//bottom tabs
export enum MainRoutes {
  HomePage = "Home",
  ProfilePage = "Profile",
  TransactionsPage = "Transactions",
  MorePage = "More",
}

//components
//wrapper
export type WrapperProps = {
  children: React.ReactNode;
};
//search
export type SearchProps = {
  clicked: boolean;
  handleChange: (a: string) => void;
  handleClicked: () => void;
  searchPhrase: string;
  placeholder: string;
  clearSearchField: () => void;
  infoMsg: string;
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
  _id: string;
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
  packaging?: string;
  isReturnable: boolean;
};

//new stock
export type FormProps = {
  initialValues: Item;
  btn_title: string;
  categoryValue: string;
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
  user: { firstName: string; lastName: string; imageSrc?: string };
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
  handlePress: (a: string) => void;
};
export type NavigationProps = {
  navigate: (route: string, params?: { id: string }) => void;
};

export type mainStackParams = {
  Stock: undefined;
  CreditBook: undefined;
  CashBook: undefined;
  Purchases: undefined;
  home: undefined;
  Sales: undefined;
  Expenses: undefined;
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
  editable: string;
  isEditing: boolean;
  initialValues: Item;
  availableStock: Array<Item>;
  categories: Array<{ title: string; value: string; id: string }>;
  cart: Array<Item>;
  displaySearchBar: boolean;
  displayCategoriesSearchBar: boolean;
};
