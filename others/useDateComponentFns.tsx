import { useFormikContext } from "formik";
import React from "react";
import { getDate } from "../utils";

const useFns = (entryDateValue: string|Date, entryTimeValue: string|Date) => {
  const { setFieldValue } = useFormikContext();
  const [entryDate, setEntryDate] = React.useState<Date | string>(
    entryDateValue
  );
  const { date } = getDate(entryDate);
  const [itemTime, setItemTime] = React.useState<string | Date>(entryTimeValue);
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

  return {
    handleConfirm,
    handleTimePickerConfirm,
    showDatePicker,
    showTimePicker,
    isDatePickerVisible,
    isTimePickerVisible,
    hideDatePicker,
    hideTimePicker,
    date,
    time,
  };
};

export default useFns;
