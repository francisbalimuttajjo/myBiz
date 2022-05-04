import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Ionicon from "react-native-vector-icons/EvilIcons";
import Icon from "react-native-vector-icons/AntDesign";
import { getDate } from "../../utils";
import { useFormikContext } from "formik";
type Props = {
  date: Date | string;
  time: string |Date;
};

const DateComponent = (props: Props) => {
  const { setFieldValue } = useFormikContext();
  const [entryDate, setEntryDate] = React.useState<Date | string>(props.date);
  const { date } = getDate(entryDate);
  const [itemTime, setItemTime] = React.useState<string | Date>(props.time);
  const { time } = getDate(itemTime);

  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = React.useState(false);
  const showDatePicker = () => setDatePickerVisibility(true);
  const showTimePicker = () => setTimePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);
  const hideTimePicker = () => setTimePickerVisibility(false);

  const handleConfirm = (date: Date) => {
    setFieldValue("itemDate", date);
    setEntryDate(date);
    hideDatePicker();
  };

  const handleTimePickerConfirm = (date: Date) => {
    setFieldValue("itemTime", date);
    setItemTime(date);
    hideTimePicker();
  };
  return (
    <View style={styles.container}>
      <Pressable
        onPress={showDatePicker}
        style={{ ...styles.flex, width: "60%" }}
      >
        <Ionicon name="calendar" size={28} color="#6b6c6e" />
        <Text style={{ fontWeight: "bold" }}>{date}</Text>
        <View style={{ marginHorizontal: 10 }}>
          <Icon name="caretdown" size={12} color="#6b6c6e" />
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </Pressable>
      <Pressable
        onPress={showTimePicker}
        style={{ ...styles.flex, width: "30%" }}
      >
        <View style={{ marginHorizontal: 7 }}>
          <Icon name="clockcircleo" size={20} color="#6b6c6e" />
        </View>
        <Text style={{ fontWeight: "bold" }}>{time}</Text>
        <View style={{ marginHorizontal: 10 }}>
          <Icon name="caretdown" size={12} color="#6b6c6e" />
        </View>
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleTimePickerConfirm}
          onCancel={hideTimePicker}
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
