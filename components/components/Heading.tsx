import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Heading: React.FC<{ title: string }> = (props) => {
  return (
    <View>
      <Text style={styles.text}>{props.title}</Text>
      <View style={styles.separator} />
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    margin: 6,
    fontSize: 20,
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
