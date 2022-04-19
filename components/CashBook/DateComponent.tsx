import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Ionicon from "react-native-vector-icons/EvilIcons";
import Icon from "react-native-vector-icons/AntDesign";
type Props = {
  showDatePicker: () => void;
  date: string;
  isDatePickerVisible: boolean;
  showTimePicker: () => void;
  hideDatePicker: () => void;
  hideTimePicker: () => void;
  handleConfirm: (val: Date) => void;
  handleTimePickerConfirm: (val: Date) => void;
  time: string;
  isTimePickerVisible: boolean;
};

const DateComponent = (props: Props) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={props.showDatePicker}
        style={{ ...styles.flex, width: "60%" }}
      >
        <Ionicon name="calendar" size={28} color="#6b6c6e" />
        <Text style={{ fontWeight: "bold" }}>{props.date}</Text>
        <View style={{ marginHorizontal: 10 }}>
          <Icon name="caretdown" size={12} color="#6b6c6e" />
        </View>
        <DateTimePickerModal
          isVisible={props.isDatePickerVisible}
          mode="date"
          onConfirm={props.handleConfirm}
          onCancel={props.hideDatePicker}
        />
      </Pressable>
      <Pressable
        onPress={props.showTimePicker}
        style={{ ...styles.flex, width: "30%" }}
      >
        <View style={{ marginHorizontal: 7 }}>
          <Icon name="clockcircleo" size={20} color="#6b6c6e" />
        </View>
        <Text style={{ fontWeight: "bold" }}>{props.time}</Text>
        <View style={{ marginHorizontal: 10 }}>
          <Icon name="caretdown" size={12} color="#6b6c6e" />
        </View>
        <DateTimePickerModal
          isVisible={props.isTimePickerVisible}
          mode="time"
          onConfirm={props.handleTimePickerConfirm}
          onCancel={props.hideTimePicker}
        />
      </Pressable>
    </View>
  );
};

export default DateComponent;

const styles = StyleSheet.create({
  flex: { flexDirection: "row", alignItems: "center" },
  container: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
  },
});
