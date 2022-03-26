import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export type Props = {
  icon1: string;
  icon2: string;
  title1: string;
  title2: string;
};

const Segment: React.FC<Props> = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.segmentContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate(props.title1 as never)}
      >
        <View style={styles.container}>
          <View style={styles.icon}>
            <Ionicon name={props.icon1} size={50} color="white" />
          </View>
          <View style={styles.borderLine}></View>
          <Text>{props.title1}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate(props.title2 as never)}
      >
        <View style={styles.container}>
          <View style={styles.icon}>
            <Ionicon name={props.icon2} size={50} color="white" />
          </View>
          <View style={styles.borderLine}></View>
          <Text>{props.title2}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Segment;
const styles = StyleSheet.create({
  segmentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 24,
  },
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
