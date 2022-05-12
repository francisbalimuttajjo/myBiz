import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getDate } from "../../utils";
import { NavigationProps, CashItemProps } from "../../types/types";

const Item: React.FC<CashItemProps> = ({ item }) => {
  const { navigate } = useNavigation<NavigationProps>();
  const { time } = getDate(item.itemTime);
  const { date } = getDate(item.entryDate);

  return (
    <TouchableOpacity
      onPress={() => navigate("entryDetails", { id: item.id })}
      activeOpacity={0.8}
      style={styles.container}
    >
      <View style={{ width: "80%" }}>
        <Text style={styles.title}>{item.Remark}</Text>
        <View style={styles.sub_container}>
          <View style={styles.category}>
            <Text style={styles.category_text}>{item.Category}</Text>
          </View>
          <View style={styles.cash_container}>
            <Text style={styles.mode}>{item.paymentMode}</Text>
          </View>
        </View>
        <View style={styles.time_container}>
          <Text>{time}</Text>
          <Text style={{ marginLeft: 10 }}>{date}</Text>
        </View>
      </View>
      <View style={styles.amount_container}>
        <Text
          style={{
            ...styles.amount,
            color: item.type === "cash-in" ? "green" : "red",
          }}
        >
          {item.Amount}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
const styles = StyleSheet.create({
  category_text: { color: "skyblue", textTransform: "capitalize" },
  mode: { color: "#3d7de3", textTransform: "capitalize" },
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
  time_container: {
    bottom: 0,
    position: "absolute",
    marginLeft: 10,
    flexDirection: "row",
  },
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
