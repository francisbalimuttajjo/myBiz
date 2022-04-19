import { useSelector } from "react-redux";
import React from "react";
import { RootState } from "../../redux/Store";
import { getTotalSum, getDate } from "../../utils";

const UseCart = () => {
  const { cart } = useSelector((state: RootState) => state.stock);
  const [btn, setBtn] = React.useState<string>("cash");
  const [message, setMessage] = React.useState<string>("");
  const [client, setClient] = React.useState<string>("");
  const [paymentDate, setPaymentDate] = React.useState<Date>(new Date());
  const [discount, setDiscount] = React.useState<number>(0);
  const [cashReceived, setCashReceived] = React.useState<number>(0);
  const [error, setError] = React.useState<boolean>(false);
  const [visible, setVisible] = React.useState<boolean>(true);

  const { date } = getDate(paymentDate);

  const changeToCash = () => {
    setBtn("cash");
  };
  const changeToCredit = () => setBtn("credit");

  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const showDatePicker = () => setDatePickerVisibility(true);

  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (date: Date) => {
    setPaymentDate(date);
    hideDatePicker();
  };

  const handleClient = (val: string) => {
    setMessage("");
    setError(false);
    setClient(val);
  };
  const handleCash = (val: string) => setCashReceived(+val);

  const clearMsg = () => setMessage("");
  let sum = getTotalSum(cart);
  const handleDiscount = (val: string) => setDiscount(+val);

  let toBePaid = sum - discount;
  const change = cashReceived - toBePaid < 0 ? 0 : cashReceived - toBePaid;

  const handleSubmit = () => {
    setMessage("");
    if (!client) {
      setMessage("Customer is missing");
      return setError(true);
    }
    if (discount > sum) {
      setMessage("discount cant be more than the price");
      return;
    }
    if (toBePaid > cashReceived && btn === "cash") {
      setMessage("Cash received is less than expected");
      return;
    }

    //store the data in database
    //credit sale, and client pays somethin,record that client as a debtor with the balance
    console.log("submitted");
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
