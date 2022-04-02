import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import SelectComponent from "./SelectComponent";

type Props = {
  values: Array<{ label: string; value: string }>;
  value: string;
  title: string;
  handleChange: (val: string) => void;
  onChange: (a: string, event: { nativeEvent: { text: string } }) => void;
  price: number;
  name: string;
};
const PriceComponent: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ width: "35%" }}>
        <Text>Currency</Text>
        <SelectComponent
          values={props.values}
          value={props.value}
          onChange={props.handleChange}
        />
      </View>
      <View style={{ width: "50%", marginLeft: 20 }}>
        <Text style={{ paddingBottom: -10 }}>Enter {props.title}</Text>
        <TextInput
          keyboardType="numeric"
          value={String(props.price)}
          onChange={(value) => props.onChange(props.name, value)}
          style={styles.textInput}
        />
      </View>
    </View>
  );
};
export default PriceComponent;
const styles = StyleSheet.create({
  container: { flexDirection: "row", marginLeft: 10, paddingLeft: 10 },
  textInput: { borderBottomWidth: 0.5, marginTop: 12 },
});
