import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { SegmentProps as Props, NavigationProps } from "../../types/types";

const Segment: React.FC<Props> = (props) => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.segmentContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate(props.first_title)}
      >
        <View style={styles.container}>
          <View style={styles.icon}>
            <Ionicon name={props.first_icon} size={50} color="white" />
          </View>
          <View style={styles.borderLine}></View>
          <Text>{props.first_name}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate(props.second_title)}
      >
        <View style={styles.container}>
          <View style={styles.icon}>
            <Ionicon name={props.second_icon} size={50} color="white" />
          </View>
          <View style={styles.borderLine}></View>
          <Text>{props.second_name}</Text>
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
    marginTop: "20%",
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
