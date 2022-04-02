import React from "react";
import { StyleSheet, View } from "react-native";

type Props = {
  children: React.ReactNode;
};
const Wrapper: React.FC<Props> = (props) => {
  return <View style={styles.container}>{props.children}</View>;
};

export default Wrapper;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 20,
    paddingHorizontal: 10,
    width: "95%",
    alignSelf: "center",
  },
});
