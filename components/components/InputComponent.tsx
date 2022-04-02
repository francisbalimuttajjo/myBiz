import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  title: string;
};
const InputComponent: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.title}</Text>
          <TextInput placeholder={`Enter Item ${ props.title}`} style={styles.input} />
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    margin: 6,
  },
  input: { width: "90%", marginLeft: 20 },
});
