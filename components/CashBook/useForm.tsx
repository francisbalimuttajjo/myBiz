import React from "react";
import { CashItemProps as Props } from "../../types/types";
import { getDate } from "../../utils";

const UseForm = (props: { item: Props["item"] }) => {
  const [type, setType] = React.useState<string>(props.item.type);

  const [entryDate, setEntryDate] = React.useState<Date | string>(
    props.item.entryDate
  );
  const { date } = getDate(entryDate);
  const [itemTime, setItemTime] = React.useState(props.item.itemTime);
  const { time } = getDate(itemTime);
  const changeToCashIn = () => setType("cash-in");
  const changeToCashOut = () => setType("cash-out");
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = React.useState(false);
  const showDatePicker = () => setDatePickerVisibility(true);
  const showTimePicker = () => setTimePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);
  const hideTimePicker = () => setTimePickerVisibility(false);

  const handleConfirm = (date: Date) => {
    setEntryDate(date);
    hideDatePicker();
  };

  const handleTimePickerConfirm = (date: Date) => {
    setItemTime(date);
    hideTimePicker();
  };
  const [amount, setAmount] = React.useState(props.item.amount.toString());
  const [remark, setRemark] = React.useState(props.item.title);
  const onAmountChange = (el: string) => {
    setErrors({ ...errors, amount: false });
    setAmount(el);
  };
  const onChangeRemark = (el: string) => {
    setErrors({ ...errors, remark: false });
    setRemark(el);
  };
  const [errors, setErrors] = React.useState({
    amount: false,
    remark: false,
    category: false,
  });
  const handleSubmit = () => {
    if (!remark) {
      setErrors({ ...errors, remark: true });
    }
    if (!amount) {
      setErrors({ ...errors, amount: true });
    }
    if (!category) {
      setErrors({ ...errors, category: true });
    }
    console.log({
      type,
      time,
      date,
      amount,
      remark,
      category,
      paymentMode,
      entryDate,
      itemTime,
    });
  };

  const [paymentMode, setPaymentMode] = React.useState<string>(
    props.item.paymentMode
  );
  const [category, setCategory] = React.useState<string>(props.item.category);

  const changeToCash = () => setPaymentMode("cash");
  const changeToOnline = () => setPaymentMode("online");
  const handlePickerChange = (itemValue: string) => {
    setErrors({ ...errors, category: false });
    setCategory(itemValue);
  };
  return {
    changeToOnline,
    changeToCash,
    paymentMode,
    handleSubmit,
    onAmountChange,
    handleTimePickerConfirm,
    showDatePicker,
    showTimePicker,
    onChangeRemark,
    isTimePickerVisible,
    isDatePickerVisible,
    changeToCashOut,
    changeToCashIn,
    handleConfirm,
    type,
    date,
    time,
    handlePickerChange,
    errors,
    remark,
    hideDatePicker,
    hideTimePicker,
    amount,
    category,
  };
};

export default UseForm;
