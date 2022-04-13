export enum MainRoutes {
  HomePage = "Home",
  ProfilePage = "Profile",
  TransactionsPage = "Transactions",
  MorePage = "More",
}

//navigation
export type TabStackParams = {
  Home: undefined;
  Profile: undefined;
  Transactions: undefined;
  More: undefined;
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

//Headeer.tsx/components/home
export type HeaderProps = {
  user: { firstName: string; lastName: string; imageSrc?: string };
};

//segment.tsx/components/home
export type SegmentProps = {
  first_icon: string;
  second_icon: string;
  first_title: string;
  second_title: string;
};
//switch.tsx/components/home
export type SwitchProps = {
  isEnabled: boolean;
  toggleSwitch: () => void;
};

////select.tsx/components/form
export type SelectProps = {
  error?: string;
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

export type Props = {
  cartItem?: boolean;
  item: {
    _id?: string;
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

  handlePress: (a: string) => void;
};

//new stock/components/form
export type NewStockProps = {
  initialValues: Props["item"];
  btn_title: string;
  categoryValue: string;
};
//too
export interface ToolTipProps {
  openToolTip: () => void;
  visible: boolean;
  closeToolTip: () => void;
}
export type NavigationProps = {
  navigate: (route: string, params?: { id: string }) => void;
};
