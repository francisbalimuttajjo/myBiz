import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  onChange: (a: string, event: { nativeEvent: { text: string } }) => void;
  name: string;
  stock: number;
  title: string;
  error?: string;
};
const StockComponent: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text>{props.title} *</Text>
      </View>
      <View
        style={{ ...styles.container2, borderColor: props.error ? "red" : "" }}
      >
        <TextInput
          keyboardType="numeric"
          value={String(props.stock)}
          onChange={(value) => props.onChange(props.name, value)}
        />
      </View>
    </View>
  );
};

export default StockComponent;

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginLeft: 10, paddingLeft: 10 },
  container1: {
    width: "35%",
    marginTop: 10,
  },
  container2: {
    width: "50%",
    borderBottomWidth: 0.5,
    marginLeft: 20,
  },
});
