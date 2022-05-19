import React from "react";
import axios from "axios";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { Transaction } from "../../redux/others/user";
import { RootState } from "../../redux/Store";
import { getDate, url } from "../../utils";
import { getTransactions } from "../../redux/UserSlice";

type Props = { item: Transaction };

const Item = (props: Props) => {
  const dispatch = useDispatch();
  const { date } = getDate(props.item.createdAt);
  const [loading, setLoading] = React.useState<boolean>(false);
  const total = props.item.cashReceived + props.item.cashPending;

  const { token, user } = useSelector((state: RootState) => state.user);

  const handleDelete = () => {
    setLoading(true);

    axios
      .delete(
        `${url}/api/v1/transactions/${props.item.id}`,

        { headers: { "Content-Type": "application/json", token } }
      )
      .then(() => {
        setLoading(false);
        dispatch(getTransactions({ user: user.email, token }));
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={styles.sub_container}>
          <View style={{ width: "80%" }}>
            <Text style={styles.date_text}>{date}</Text>
            <Text style={styles.client_text}>{props.item.client}</Text>
          </View>
          <View>
            <Text>Total:</Text>
            <Text style={styles.total}>{total}</Text>
          </View>
        </View>

        <View style={styles.sub_container_2}>
          <View style={styles.cash_container}>
            <Text style={styles.mode}>{props.item.type}</Text>
          </View>
          <View style={styles.icon_container}>
            <TouchableOpacity
              disabled={loading}
              activeOpacity={0.7}
              onPress={handleDelete}
            >
              {loading && <ActivityIndicator size="small" color="skyblue" />}
              {!loading && (
                <Ionicon name="trash-outline" size={20} color="#e1e5eb" />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.balance_container}>
            <Text> Balance:</Text>
            <Text>
              {props.item.cashPending < 0 ? 0 : props.item.cashPending}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Item;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "#e0e1e2",
    borderBottomWidth: 0.5,
    height: 110,
    width: "90%",
    alignSelf: "center",
  },
  cash_container: {
    backgroundColor: "#e1e5eb",
    paddingVertical: 7,
    borderRadius: 5,
    alignItems: "center",
    width: 60,
  },
  icon_container: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },
  client_text: { marginTop: 10, textTransform: "capitalize" },
  date_text: { fontWeight: "bold", opacity: 0.6 },
  total: { fontWeight: "bold", fontSize: 20 },
  sub_container: { height: "65%", flexDirection: "row" },
  sub_container_2: { height: "35%", flexDirection: "row" },
  mode: { color: "#3d7de3", textTransform: "capitalize" },
  balance_container: { flexDirection: "row", right: 0, position: "absolute" },
});
