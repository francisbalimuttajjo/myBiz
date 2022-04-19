import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import { CashItemProps } from "../../types/types";

import { getDate } from "../../utils";
import Btns from "./EntryType";
import Input from "./FloatingInput";
import DateComponent from "./DateComponent";

const Edit = (props: CashItemProps) => {
  const [type, setType] = React.useState(props.item.type);
  const [entryDate, setEntryDate] = React.useState(props.item.date);
  const { date } = getDate(entryDate);
  const [itemTime, setItemTime] = React.useState(props.item.date);
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
  console.log({ itemTime });
  const handleTimePickerConfirm = (date: Date) => {
    setItemTime(date);
    hideTimePicker();
  };
  const [amount, setAmount] = React.useState(props.item.amount.toString());
  const [remark, setRemark] = React.useState(props.item.title);
  const onChange = (el: string) => setAmount(el);
  const onChangeRemark = (el: string) => setRemark(el);
  return (
    <View style={{ backgroundColor: "#fff", height: "100%" }}>
      <Btns
        type={type}
        changeToCashIn={changeToCashIn}
        changeToCashOut={changeToCashOut}
      />
      <DateComponent
        handleTimePickerConfirm={handleTimePickerConfirm}
        hideDatePicker={hideDatePicker}
        hideTimePicker={hideTimePicker}
        date={date}
        time={time}
        showDatePicker={showDatePicker}
        isDatePickerVisible={isDatePickerVisible}
        isTimePickerVisible={isTimePickerVisible}
        handleConfirm={handleConfirm}
        showTimePicker={showTimePicker}
      />
      <View style={{ paddingTop: "5%" }}>
        <Input
          label="Amount"
          onChange={onChange}
          value={amount}
          keyboard="numeric"
          item={props.item}
        />
        <Input
          label="Remark"
          onChange={onChangeRemark}
          value={remark}
          item={props.item}
        />
      </View>
    </View>
  );
};

export default Edit;

const styles = StyleSheet.create({});
