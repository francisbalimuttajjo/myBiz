import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  title: string;
};
const Supplier: React.FC<Props> = (props) => {
  return (
    <Pressable style={styles.button} onPress={() => console.log("clicked")}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

export default Supplier;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    width: "95%",
    backgroundColor: "skyblue",
    alignSelf: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textTransform: "capitalize",
  },
});
