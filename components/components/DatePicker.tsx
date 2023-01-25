import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Ionicon from "react-native-vector-icons/EvilIcons";
import { DatePickerProps as Props } from "../../types/types";

const Date = (props: Props) => {
 
  return (
    <View>
      <View style={styles.container}>
        <Text style={{ marginBottom: 10 }}>Due Date</Text>
        <Pressable onPress={props.showDatePicker} style={styles.btn}>
          <TextInput
            style={{ opacity: 0.8 }}
            placeholder="Choose Date"
            value={props.date}
          />
          <View style={styles.icon}>
            <Ionicon name="calendar" size={32} color="skyblue" />
          </View>
        </Pressable>
      </View>
      <DateTimePickerModal
        isVisible={props.isDatePickerVisible}
        mode="date"
        onConfirm={props.handleConfirm}
        onCancel={props.hideDatePicker}
      />
    </View>
  );
};

export default Date;
const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    width: "90%",
    alignSelf: "center",
  },

  btn: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#e0e1e2",
    paddingBottom: 8,
  },
  icon: { right: 0, position: "absolute" },
});
