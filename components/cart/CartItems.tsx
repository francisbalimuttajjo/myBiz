import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { Item } from "../../types/types";
import { addItem, reduceItem } from "../../redux/StockSlice";

const CartItem = (props: { item: Item; qty: number }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.sub_container}>
        <View style={{ width: "70%" }}>
          <View style={{ height: "80%" }}>
            <Text style={styles.title}>{props.item.name}</Text>
            <Text style={{ fontSize: 12 }}>
              Packaging: {props.item.packaging}
            </Text>
          </View>
          <Text>{props.item.description}</Text>
        </View>
        <View style={styles.btn_container}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => dispatch(addItem({ id: props.item._id }))}
              activeOpacity={0.8}
              style={{ ...styles.btn, backgroundColor: "skyblue" }}
            >
              <Text style={{ ...styles.btn_text, color: "white" }}>+</Text>
            </TouchableOpacity>
            <View style={styles.qty}>
              <Text>{props.qty}</Text>
            </View>

            <TouchableOpacity
              onPress={() => dispatch(reduceItem({ id: props.item._id }))}
              activeOpacity={0.8}
              style={{
                ...styles.btn,
                backgroundColor: props.qty === 0 ? "#e0e1e2" : "skyblue",
              }}
            >
              <Text
                style={{
                  ...styles.btn_text,
                  color: props.qty === 0 ? "black" : "white",
                }}
              >
                -
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.totals_container}>
            <Text style={{ fontSize: 14 }}>SubTotal</Text>
            <View style={styles.total}>
              <Text style={{ fontSize: 12, marginRight: 5 }}>
                {props.item.sellingCurrency}
              </Text>
              <Text style={{ fontSize: 20 }}>
                {+props.item.sellingPrice * props.qty}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#e0e1e2",
    paddingVertical: "2%",
    height: 100,
    marginVertical: 10,
  },
  total: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  totals_container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    bottom: 0,
    position: "absolute",
  },
  qty: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  btn_container: { alignItems: "flex-end", width: "30%" },
  title: { fontWeight: "bold", fontSize: 16, color: "skyblue" },
  sub_container: { width: "90%", alignSelf: "center", flexDirection: "row" },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    paddingHorizontal: 10,
  },
  btn: {
    width: "33%",
    height: 25,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  btn_text: { fontWeight: "bold", fontSize: 20 },
});
