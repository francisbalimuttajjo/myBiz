import React from "react";
import { StyleSheet, Text, View,ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { Transaction } from "../../redux/UserSlice";
import { getDate } from "../../utils";

type Props = { item: Transaction };

const Item = (props: Props) => {
  const { date } = getDate(props.item.createdAt);
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontWeight: "bold", opacity: 0.6 }}>{date}</Text>
        <Text style={{ marginTop: 10, textTransform: "capitalize" }}>
          {props.item.client}
        </Text>

        <View style={styles.cash_container}>
          <Text style={styles.mode}>{props.item.type}</Text>
        </View>
      </View>
    </View>
  );
};

const Transactions = () => {
  const { transactions } = useSelector((state: RootState) => state.user);

  return (
    <ScrollView>
      {transactions.map((el, index) => (
        <Item item={el} key={index} />
      ))}
    </ScrollView>
  );
};

export default Transactions;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "#e0e1e2",
    borderBottomWidth: 0.5,
    flexDirection: "row",
    height: 110,
  },
  cash_container: {
    backgroundColor: "#e1e5eb",
    // marginHorizontal: 10,
    paddingVertical: 7,
    // paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: "center",
    //minWidth:20
    width: 60,
  },
  mode: { color: "#3d7de3", textTransform: "capitalize" },
});
