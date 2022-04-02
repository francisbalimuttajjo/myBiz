import { Picker } from "@react-native-picker/picker";
import React from "react";
import { StyleSheet, View } from "react-native";

type Props = {
  value: string;
  onChange: (val: string) => void;
  values: Array<{ label: string; value: string }>;
};
const SelectComponent: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Picker
        style={styles.picker}
        selectedValue={props.value}
        onValueChange={props.onChange}
      >
        {props.values.map((el, index) => (
          <Picker.Item label={el.label} key={index} value={el.value} />
        ))}
      </Picker>
    </View>
  );
};

export default SelectComponent;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    marginTop: -10,
    paddingBottom: -20,
    marginBottom: 10,
  },
  picker: {
    color: "skyblue",
  },
});
