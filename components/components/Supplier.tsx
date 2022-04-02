import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  onChange: (a: string, event: { nativeEvent: { text: string } }) => void;
  name: string;
  supplier: string;
};
const Supplier: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text>Supplier</Text>
      </View>
      <View style={styles.container2}>
        <TextInput
       
          value={props.supplier}
          onChange={(value) => props.onChange(props.name, value)}
          style={styles.text}
        />
      </View>
    </View>
  );
};

export default Supplier;

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginLeft: 10, paddingLeft: 10 },
  text: {
    borderBottomWidth: 0.5,
    marginTop: 0,
  },
  container1: {
    width: "35%",
    marginTop: 10,
  },
  container2: {
    width: "50%",
    marginLeft: 20,
  },
});