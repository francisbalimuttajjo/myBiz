import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  changeToCashIn: () => void;
  changeToCashOut: () => void;
  type: string;
};

const Type = (props: Props) => {
  return (
    <View style={styles.btns_container}>
      <TouchableOpacity
        onPress={props.changeToCashIn}
        activeOpacity={0.8}
        style={{
          backgroundColor: props.type === "cash-in" ? "green" : "#e1e5eb",
          marginHorizontal: 15,
          ...styles.btn,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: props.type === "cash-in" ? "#fff" : "black",
          }}
        >
          Cash-In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={props.changeToCashOut}
        style={{
          ...styles.btn,
          backgroundColor: props.type === "cash-out" ? "red" : "#e1e5eb",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: props.type === "cash-out" ? "#fff" : "black",
          }}
        >
          Cash-Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Type;
const styles = StyleSheet.create({
  btns_container: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    paddingVertical: "5%",
  },
  btn: { paddingVertical: 8, paddingHorizontal: 15, borderRadius: 18 },
});
