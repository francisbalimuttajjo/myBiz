import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Horizontal = (props: { length: number }) => {
  return (
    <View style={styles.container}>
      <View style={styles.empty_div} />
      <View style={styles.text_container}>
        <Text style={styles.text}>
          Showing {props.length} {props.length > 1 ? "entries" : "entry"}
        </Text>
      </View>
      <View style={styles.empty_div} />
    </View>
  );
};

export default Horizontal;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    height: 60,
  },
  text: { color: "skyblue", fontSize: 16 },
  text_container: {
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  empty_div: { width: "30%", height: 1, backgroundColor: "#e0e1e2" },
});
