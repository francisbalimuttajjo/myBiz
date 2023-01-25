import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CartSummaryProps as Props } from "../../types/types";

const CartSummary = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.summary_text}>Order Summary</Text>
      <View style={styles.sub_container}>
        <View style={styles.totals_container}>
          <View style={styles.summary_container}>
            <View style={styles.text_container}>
              <Text>Discount</Text>
            </View>
            <View style={styles.text_container}>
              <Text>{props.discount}</Text>
            </View>
          </View>
          <View style={styles.summary_container}>
            <View style={styles.text_container}>
              <Text>TotalPrice</Text>
            </View>
            <View style={styles.text_container}>
              <Text>{props.itemsPrice}</Text>
            </View>
          </View>
          <View style={styles.summary_container}>
            <View style={styles.text_container}>
              <Text style={styles.grand_total}>Grand Total</Text>
            </View>
            <View style={styles.text_container}>
              <Text style={styles.grand_total}>
                {props.grandTotal < 0 ? 0 : props.grandTotal}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default CartSummary;

const styles = StyleSheet.create({
  grand_total: { color: "skyblue", fontWeight: "bold" },
  container: {
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
  },
  text_container: { width: "50%" },
  totals_container: { width: "70%", alignSelf: "center" },
  summary_container: { width: "100%", flexDirection: "row", marginVertical: 5 },
  sub_container: {
    borderWidth: 0.5,
    borderColor: "#e0e1e2",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: "5%",
  },
  summary_text: { fontWeight: "normal", fontSize: 16, marginBottom: 10 },
});
