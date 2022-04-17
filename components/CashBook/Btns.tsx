import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Btns = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          backgroundColor: "#038238",
          ...styles.btn,
        }}
      >
        <Text style={styles.text}>+ CASH IN</Text>
      </TouchableOpacity>
      <TouchableOpacity
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
