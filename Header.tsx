import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/FontAwesome";

export type Props = { name: string };

const Hello: React.FC<Props> = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Icon name="shop" size={40} color="blue" />
        <Text style={styles.text1}> My</Text>
        <Text style={styles.text2}> Bizz</Text>
      </View>
      <View style={styles.subContainer}>
        <Icon2 name="user-circle" size={40} color="white" />
        <Text style={styles.text3}>Hello, {props.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: { marginTop: 24 },
  subContainer: {
    backgroundColor: "blue",
    paddingVertical: 8,
    display: "flex",
    flexDirection: "row",
    alignItems:'center',
    paddingLeft:12
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingVertical: 12,
    paddingLeft: 12,
    alignItems: "center",
  },
  text2: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 24,
  },
  text1: {
    fontWeight: "bold",
    fontSize: 24,
  },
  text3: {
    color: "white",
    fontWeight: "bold",
    marginLeft:6
  },
});

export default Hello;
