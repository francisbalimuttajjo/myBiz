import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationProps } from "../../types/types";

const Btns = () => {
  const { navigate } = useNavigation<NavigationProps>();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigate("CashInEntry")}
        activeOpacity={0.8}
        style={{
          backgroundColor: "#038238",
          ...styles.btn,
        }}
      >
        <Text style={styles.text}>+ CASH IN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigate("CashOutEntry")}
        activeOpacity={0.7}
        style={{
          backgroundColor: "red",
          ...styles.btn,
        }}
      >
        <Text style={styles.text}>- CASH OUT</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Btns;
const styles = StyleSheet.create({
  container: {
    bottom: 0,
    position: "absolute",
    backgroundColor: "#fff",
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
    paddingVertical: 15,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  btn: {
    width: "40%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
  },
});
