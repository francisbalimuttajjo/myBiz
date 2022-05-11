import * as Yup from "yup";
import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { RootState } from "../../redux/Store";
import { NavigationProps } from "../../types/types";
import { getTotalSum, getDate, getCartItems } from "../../utils";
import { getItems, resetCart } from "../../redux/StockSlice";
import { getTransactions } from "../../redux/UserSlice";

const UseCart = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation<NavigationProps>();

  const { cart } = useSelector((state: RootState) => state.stock);
  const { user, transactions } = useSelector((state: RootState) => state.user);

  const changeToCash = () => setBtn("cash");
  const changeToCredit = () => setBtn("credit");
  const [btn, setBtn] = React.useState<string>("cash");
  const [error, setError] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [paymentDate, setPaymentDate] = React.useState<Date>(new Date());

  let sum = getTotalSum(cart);
  const { date } = getDate(paymentDate);

  const [isDatePickerVisible, setDatePickerVisibility] =
    React.useState<boolean>(false);

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (date: Date) => {
    setPaymentDate(date);
    hideDatePicker();
  };

  const initialValues = { Customer: "", Discount: "0", CashReceived: "0" };
  const validationSchema = Yup.object().shape({
    Customer: Yup.string()
      .trim()
      .required("Customer is required")
      .label("Customer"),
  });

  const handleSubmit = (values: {
    CashReceived: string;
    Discount: string;
    Customer: string;
  }) => {
    setError("");

    if (
      (parseInt(values.CashReceived) - (sum - parseInt(values.Discount)) < 0 ||
        isNaN(parseInt(values.CashReceived))) &&
      btn === "cash"
    ) {
      setError("Cash Received is less");
      return;
    }
    setLoading(true);

    // //making api call if all is well
    axios
      .post(`http://192.168.43.96:5000/api/v1/transactions`, {
        client: values.Customer,
        user: user.email,
        cashReceived: values.CashReceived,
        type: "sales",
        discount: parseInt(values.Discount),
        paymentDate,
        items: getCartItems(cart),
      })
      .then((res) => {
        setLoading(false);
        dispatch(resetCart());
        dispatch(getItems({ email: user.email }));
        dispatch(getTransactions({ user: user.email }));
        navigate("Sales");
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.data);
      });
  };

  return {
    changeToCredit,
    changeToCash,
    btn,
    cart,
    loading,
    setError,
    error,
    initialValues,
    validationSchema,
    sum,
    date,
    handleConfirm,
    handleSubmit,
    hideDatePicker,
    showDatePicker,
    isDatePickerVisible,
  };
};

export default UseCart;
