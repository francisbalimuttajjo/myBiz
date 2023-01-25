import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Balance = (props: { amount_in: number; amount_out: number }) => {
  let dif = props.amount_in - props.amount_out;
  return (
    <View style={styles.main_container}>
      <View style={styles.net_balance_container}>
        <View
          style={{ ...styles.view, flexDirection: "row", alignItems: "center" }}
        >
          <Text style={styles.net_balance_text}>Net Balance</Text>
          {dif < 1 && (
            <Text style={{ fontSize: 12, marginLeft: 5 }}>(No Cash )</Text>
          )}
        </View>

        <Text
          style={{ ...styles.net_balance, color: dif < 1 ? "red" : "black" }}
        >
          {dif < 1 ? -1 * dif : dif}
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.text_total}>Total In (+)</Text>
        </View>

        <Text style={styles.amount_in}>{props.amount_in}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.text_total}>Total Out (-)</Text>
        </View>

        <Text style={styles.amount_out}>{props.amount_out}</Text>
      </View>
    </View>
  );
};
export default Balance;
const styles = StyleSheet.create({
  amount_in: { fontSize: 16, color: "green" },
  amount_out: { fontSize: 16, color: "red" },
  view: { width: "80%" },
  net_balance: { fontSize: 20 },
  text_total: { fontSize: 19 },
  net_balance_text: { fontWeight: "bold", fontSize: 20 },
  main_container: {
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 2,
    alignSelf: "center",
    borderColor: "#e0e1e2",
    borderWidth: 0.5,
    padding: "3%",
  },
  net_balance_container: {
    flexDirection: "row",
    width: "95%",
    alignSelf: "center",
    borderBottomWidth: 0.5,
    borderColor: "#e0e1e2",
    paddingBottom: 4,
  },
  container: {
    flexDirection: "row",
    width: "95%",
    alignSelf: "center",
    paddingTop: 14,
  },
});
