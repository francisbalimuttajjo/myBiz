import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  title: string;
  value: string;
  onChangeText: (a: string, event: { nativeEvent: { text: string } }) => void;
};

const InputComponent: React.FC<Props> = ({ title, value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <TextInput
        value={value}
        placeholder={`Enter Item ${title}`}
        style={styles.input}
        onChange={(value) => onChangeText(title, value)}
      />
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    margin: 6,
    // borderColor: "red",
  },
  input: { width: "90%", marginLeft: 20 },
});
