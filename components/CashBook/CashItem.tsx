import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationProps, CashItemProps } from "../../types/types";

const Item: React.FC<CashItemProps> = ({ item }) => {
  const { navigate } = useNavigation<NavigationProps>();
  return (
    <TouchableOpacity
      onPress={() => navigate("entryDetails", { id: item._id })}
      activeOpacity={0.8}
      style={styles.container}
    >
      <View style={{ width: "80%" }}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.sub_container}>
          <View style={styles.category}>
            <Text style={{ color: "skyblue" }}>{item.category}</Text>
          </View>
          <View style={styles.cash_container}>
            <Text style={{ color: "#3d7de3" }}>Cash</Text>
          </View>
        </View>
        <Text style={styles.time}>
          {new Date().toLocaleString(undefined, {
            // day: "numeric",
            // month: "numeric",
            // year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>
      </View>
      <View style={styles.amount_container}>
        <Text
          style={{
            ...styles.amount,
            color: item.type === "cash-in" ? "green" : "red",
          }}
        >
          {item.amount}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
const styles = StyleSheet.create({
  amount: { textTransform: "capitalize", fontWeight: "bold" },
  amount_container: { width: "20%", alignItems: "center" },
  container: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "#e0e1e2",
    borderBottomWidth: 0.5,
    flexDirection: "row",
    height: 110,
  },
  category: {
    backgroundColor: "#Dde6e4",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
  },
  time: { bottom: 0, position: "absolute" },
  cash_container: {
    backgroundColor: "#e1e5eb",
    marginHorizontal: 10,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  sub_container: { flexDirection: "row", marginTop: 10 },
  title: { textTransform: "capitalize", fontWeight: "bold" },
});
