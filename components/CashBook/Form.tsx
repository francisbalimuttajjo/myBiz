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
import { categoriesArray as categories } from "../../data";
import useForm from "./useForm";

const Form = (props: { item: CashItemProps["item"]; editing: boolean }) => {
  const {
    changeToOnline,
    changeToCash,
    paymentMode,
    handleSubmit,
    onChange,
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
    errors,
    remark,
    hideDatePicker,
    hideTimePicker,
    amount,
    category,
    entryDate,
    itemTime,
    handlePickerChange,
  } = useForm({ item: props.item });

  return (
    <View style={styles.main_container}>
      <ScrollView style={{ paddingTop: props.editing ? "2%" : "10%" }}>
        {props.editing && (
          <Btns
            type={type}
            changeToCashIn={changeToCashIn}
            changeToCashOut={changeToCashOut}
          />
        )}
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
            onValueChange={handlePickerChange}
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
        <Text style={styles.btn_text}>
          {!props.editing ? "SAVE" : "UPDATE"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;

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
