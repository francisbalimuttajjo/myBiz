import React from "react";
import axios from "axios";
import { RootState } from "../../redux/Store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { getTotalSum, getDate, getCartItems } from "../../utils";
import { getItems, resetCart } from "../../redux/StockSlice";
import { NavigationProps } from "../../types/types";

const UseCart = () => {
  const { cart } = useSelector((state: RootState) => state.stock);

  const [btn, setBtn] = React.useState<string>("cash");
  const [message, setMessage] = React.useState<string>("");
  const [client, setClient] = React.useState<string>("");
  const [paymentDate, setPaymentDate] = React.useState<Date>(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [discount, setDiscount] = React.useState<number>(0);
  const [cashReceived, setCashReceived] = React.useState<number>(0);
  const [error, setError] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [visible] = React.useState<boolean>(true);

  const { navigate } = useNavigation<NavigationProps>();
  const dispatch = useDispatch();
  const { date } = getDate(paymentDate);

  const changeToCash = () => setBtn("cash");
  const changeToCredit = () => setBtn("credit");
  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);
  const handleCash = (val: string) => setCashReceived(+val);
  const clearMsg = () => setMessage("");

  const handleConfirm = (date: Date) => {
    setPaymentDate(date);
    hideDatePicker();
  };

  const handleClient = (val: string) => {
    setMessage("");
    setError(false);
    setClient(val);
  };

  //checking out
  let sum = getTotalSum(cart);
  const handleDiscount = (val: string) => setDiscount(+val);

  let toBePaid = sum - discount;
  const change = cashReceived - toBePaid < 0 ? 0 : cashReceived - toBePaid;

  //submiting sale
  const handleSubmit = () => {
    //clearing state
    setMessage("");
    if (!client) {
      setMessage("Customer Name is missing");
      return setError(true);
    }

    //ensuring not too much discount is given
    if (discount > sum / 4) {
      setMessage("The discount is more than 25% of the total price");
      return;
    }
    //ensuring the amount received is enough if it is a cash sale
    if (toBePaid > cashReceived && btn === "cash") {
      setMessage("Cash received is less than expected");
      return;
    }
    setLoading(true);

    //making api call if all is well
    axios
      .post(`http://192.168.43.96:5000/api/v1/transactions`, {
        client_id: 1,
        cashReceived,
        type: "sales",
        discount,
        paymentDate,
        items: getCartItems(cart),
      })
      .then((res) => {
        setLoading(false);
        dispatch(resetCart());
        dispatch(getItems());
        navigate("Sales");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return {
    date,
    sum,
    discount,
    isDatePickerVisible,
    cart,
    toBePaid,
    btn,
    hideDatePicker,
    loading,
    message,
    visible,
    error,
    handleClient,
    change,
    handleSubmit,
    handleCash,
    handleDiscount,
    handleConfirm,
    showDatePicker,
    changeToCredit,
    changeToCash,
    clearMsg,
  };
};

export default UseCart;
