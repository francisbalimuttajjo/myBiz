import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { CashProps as Props } from "../../types/types";

const Cash = (props: Props) => {
  return (
    <View style={styles.main_container}>
      <View style={styles.container}>
        <Text style={styles.text}>Cash Received :</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="0.00"
          onChangeText={props.handleCash}
        />
      </View>
      <View style={styles.divider}></View>
      <View style={styles.container}>
        <Text style={styles.text}>Change :</Text>
        <Text style={styles.change}>{props.change}</Text>
      </View>
    </View>
  );
};
export default Cash;
const styles = StyleSheet.create({
  main_container: {
    borderWidth: 0.5,
    borderColor: "#e0e1e2",
    marginBottom: "20%",
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
  },
  container: { width: "50%", padding: 20 },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  divider: {
    borderRightWidth: 1.5,
    borderColor: "black",
    height: "70%",
    marginTop: "5%",
  },
  input: {
    borderBottomWidth: 0.5,
    borderColor: "skyblue",
    marginTop: "10%",
  },
  change: { borderBottomWidth: 0.5, borderColor: "skyblue", marginTop: "20%" },
});
