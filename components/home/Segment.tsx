import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export type Props = {
  first_icon: string;
  second_icon: string;
  first_title: string;
  second_title: string;
};

const Segment: React.FC<Props> = (props) => {
  const navigation = useNavigation();

  return (
    <View style={{ ...styles.container, marginTop: 24 }}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate(props.first_title as never)}
      >
        <View style={styles.container}>
          <View style={styles.icon}>
            <Ionicon name={props.first_icon} size={50} color="white" />
          </View>
          <View style={styles.borderLine}></View>
          <Text>{props.first_title}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate(props.second_title as never)}
      >
        <View style={styles.container}>
          <View style={styles.icon}>
            <Ionicon name={props.second_icon} size={50} color="white" />
          </View>
          <View style={styles.borderLine}></View>
          <Text>{props.second_title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Segment;
const styles = StyleSheet.create({
 
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  borderLine: {
    borderBottomColor: "#dfe8e1",
    marginTop: 4,
    marginBottom: 4,
    borderBottomWidth: 2,
    width: 70,
  },

  icon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "skyblue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
