import React from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { getDate } from "../../utils";
import { Sale } from "../../redux/UserSlice";

const Item = (props: { sale: Sale }) => {
  const { date } = getDate(props.sale.createdAt);
  return (
    <View style={styles.main_container}>
      <View style={styles.sub_container}>
        <View style={styles.item_container}>
          <View style={{ width: "80%" }}>
            <Text style={styles.item_name}>{props.sale.item}</Text>
            <Text style={styles.capitalize}>Customer: {props.sale.client}</Text>
            <View style={styles.details_container}>
              <Text style={styles.capitalize}>
                Items: {props.sale.quantity} &nbsp;
              </Text>
              <Text style={styles.capitalize}>
                {props.sale.item}@{props.sale.price}
              </Text>
            </View>
          </View>

          <View style={styles.price_container}>
            <Text style={styles.total}>{props.sale.total_price}</Text>
          </View>
        </View>
        <View style={styles.date_container}>
          <View style={{ width: "60%" }}>
            <Text>{date}</Text>
          </View>
          <View style={styles.btn_container}>
            <TouchableOpacity>
              <Text>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Item;
const styles = StyleSheet.create({
  main_container: {
    backgroundColor: "#fff",
    height: 100,
    marginTop: 10,
    borderColor: "#e0e1e2",
    borderBottomWidth: 0.5,
  },
  price_container: {
    width: "20%",
    alignItems: "center",
    backgroundColor: "green",
    justifyContent: "center",
    borderRadius: 20,
    height: "50%",
  },
  btn_container: {
    flexDirection: "row",
    width: "40%",
    justifyContent: "space-around",
  },
  details_container: {
    bottom: 0,
    position: "absolute",
    opacity: 0.5,
    flexDirection: "row",
  },
  sub_container: { width: "90%", alignSelf: "center" },
  date_container: { height: "25%", flexDirection: "row" },
  item_container: { flexDirection: "row", height: "75%" },
  item_name: { fontWeight: "bold", textTransform: "capitalize" },
  capitalize: { textTransform: "capitalize" },
  total: { color: "#fff", fontWeight: "bold" },
});
