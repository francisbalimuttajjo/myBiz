import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicon from "react-native-vector-icons/AntDesign";
import { CashItemProps as Props, NavigationProps } from "../../types/types";
import { getDate } from "../../utils";

const Details = (props: Props) => {
  const { navigate } = useNavigation<NavigationProps>();
  let item_name = props.item.type.split("-");
  const { date } = getDate(props.item.entryDate);
  const { time } = getDate(props.item.itemTime);
  return (
    <View style={{ paddingTop: "10%" }}>
      <View
        style={{
          ...styles.container,
          borderColor: props.item.type === "cash-in" ? "green" : "red",
        }}
      >
        <View style={styles.cash_container_1}>
          <View>
            <View style={styles.min_container}>
              <View style={{ width: "50%" }}>
                <Text
                  style={{
                    ...styles.capitalize,
                    opacity: 0.6,
                  }}
                >
                  {item_name[0]}&nbsp;{item_name[1]}
                </Text>
              </View>

              <View style={styles.date_container}>
                <Text style={styles.font}>
                  on &nbsp;
                  {date}
                </Text>
                <Text style={styles.font}>
                  &nbsp;&nbsp;
                  {time}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{
                color: props.item.type === "cash-in" ? "green" : "red",
                ...styles.amount_text,
              }}
            >
              {props.item.Amount}
            </Text>
          </View>
        </View>
        <View style={styles.title}>
          <Text style={[styles.capitalize, styles.font]}>
            {props.item.Remark}
          </Text>
          <View style={styles.sub_container}>
            <View style={styles.category}>
              <Text style={{ color: "skyblue", ...styles.capitalize }}>
                {props.item.Category}
              </Text>
            </View>
            <View style={styles.cash_container}>
              <Text style={{ color: "#3d7de3", ...styles.capitalize }}>
                {props.item.paymentMode}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.edit_container}>
          <TouchableOpacity
            onPress={() => navigate("editEntry", { id: props.item.id })}
            activeOpacity={0.6}
            style={styles.icon_container}
          >
            <Ionicon name="edit" size={25} color="#3d7de3" />
            <Text style={styles.entry_text}>EDIT ENTRY</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Details;
const styles = StyleSheet.create({
  entry_text: {
    fontWeight: "bold",
    color: "#3d7de3",
    fontSize: 18,
    marginLeft: 10,
  },
  edit_container: { alignItems: "center", paddingTop: 40 },
  icon_container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  title: {
    borderColor: "#e0e1e2",
    borderBottomWidth: 1,
    paddingHorizontal: "4%",
    paddingVertical: "6%",
  },
  amount_text: { fontWeight: "normal", fontSize: 24, padding: "2%" },
  date_container: {
    flexDirection: "row",
    alignSelf: "flex-end",
    width: "50%",
    justifyContent: "flex-end",
  },
  min_container: { flexDirection: "row", paddingTop: "5%" },
  cash_container_1: {
    borderColor: "#e0e1e2",
    borderBottomWidth: 1,
    paddingBottom: "2%",
    paddingHorizontal: "2%",
    width: "95%",
    alignSelf: "center",
  },
  container: {
    height: 250,
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 7,
    borderRadius: 5,
    borderTopWidth: 4,
  },
  font: { fontWeight: "bold" },
  capitalize: { textTransform: "capitalize" },
  category: {
    backgroundColor: "#Dde6e4",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
  },

  cash_container: {
    backgroundColor: "#e1e5eb",
    marginHorizontal: 10,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  sub_container: { flexDirection: "row", marginTop: 10 },
});
