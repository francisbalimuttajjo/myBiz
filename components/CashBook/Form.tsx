import React from "react";
import { View, StyleSheet, Button, Text, ScrollView } from "react-native";
import { CashItemProps } from "../../types/types";
import { getDate } from "../../utils";
import Btns from "./EntryType";
import Input from "./FloatingInput";
import DateComponent from "./DateComponent";
import PaymentMode from "./Mode";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";

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

  const handleTimePickerConfirm = (date: Date) => {
    setItemTime(date);
    hideTimePicker();
  };
  const [amount, setAmount] = React.useState(props.item.amount.toString());
  const [remark, setRemark] = React.useState(props.item.title);
  const onChange = (el: string) => {
    setErrors({ ...errors, amount: "" });
    setAmount(el);
  };
  const onChangeRemark = (el: string) => {
    setErrors({ ...errors, remark: "" });
    setRemark(el);
  };
  const [errors, setErrors] = React.useState({
    amount: "",
    remark: "",
    category: "",
  });
  const handleSubmit = () => {
    if (!remark) {
      setErrors({ ...errors, remark: "field is required" });
    }
    if (!amount) {
      setErrors({ ...errors, amount: "field is required" });
    }
    if (!category) {
      setErrors({ ...errors, category: "field is required" });
    }
  };

  const [paymentMode, setPaymentMode] = React.useState<string>(
    props.item.paymentMode
  );
  const [category, setCategory] = React.useState<string>(props.item.category);

  const changeToCash = () => setPaymentMode("cash");
  const changeToOnline = () => setPaymentMode("online");
  const categories = [
    { title: "choose", value: "" },
    { title: "rent", value: "rent" },
    { title: "labour", value: "labour" },
    { title: "salaries", value: "salaries" },
    { title: "others", value: "others" },
  ];
  return (
    <View style={styles.main_container}>
      <ScrollView>
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
            error={errors.amount}
          />
          <Input
            label="Remark"
            onChange={onChangeRemark}
            value={remark}
            item={props.item}
            error={errors.remark}
          />
        </View>
        <View style={styles.category_container}>
          <Text style={{ fontWeight: "bold" }}>Category:</Text>
        </View>
        <View
          style={{
            ...styles.picker_container,
            borderColor: errors.category ? "red" : "#bdbdbd",
          }}
        >
          <Picker
            onValueChange={(itemValue) => {
              setErrors({ ...errors, category: "" });
              setCategory(itemValue);
            }}
            mode={"dropdown"}
            selectedValue={category}
          >
            {categories.map((el, index) => (
              <Picker.Item label={el.title} value={el.value} key={index} />
            ))}
          </Picker>
        </View>
        <PaymentMode
          paymentMode={paymentMode}
          changeToCash={changeToCash}
          changeToOnline={changeToOnline}
        />
      </ScrollView>
      <TouchableOpacity
        onPress={handleSubmit}
        activeOpacity={0.8}
        style={styles.btn_container}
      >
        <Text style={styles.btn_text}>UPDATE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Edit;

const styles = StyleSheet.create({
  main_container: { backgroundColor: "#fff", height: "100%" },
  category_container: { width: "90%", alignSelf: "center", marginVertical: 10 },
  btn_text: { fontWeight: "bold", color: "#fff", fontSize: 16 },
  picker_container: {
    width: "90%",
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 7,
  },
  btn_container: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 7,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: "4%",
    marginVertical: "5%",
  },
});
