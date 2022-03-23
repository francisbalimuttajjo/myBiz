import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import Icon2 from "react-native-vector-icons/FontAwesome";

export type Props = {
  icon1: string;
  icon2: string;
  title1: string;
  title2: string;
};
const Segment: React.FC<Props> = (props) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 24,
      }}
    >
      <TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.icon}>
            <Icon name={props.icon1} size={80} color="white" />
          </View>
          <View style={styles.borderLine}></View>
          <Text>{props.title1}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.subContainer}>
          <View style={styles.icon}>
            <Icon name={props.icon2} size={80} color="white" />
          </View>
          <View style={styles.borderLine}></View>
          <Text>{props.title2}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const cats = [
  [
    { icon: "archive", title: "stock" },
    { icon: "archive", title: "stock" },
  ],
  [
    { icon: "archive", title: "stock" },
    { icon: "archive", title: "stock" },
  ],
  [
    { icon: "archive", title: "stock" },
    { icon: "archive", title: "stock" },
  ],
];
//const Categories: React.FC<Props> = (props) => {
const Categories = () => {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        {cats.map((cat) => (
          <Segment
            icon1={cat[0].icon}
            icon2={cat[1].icon}
            title1={cat[0].title}
            title2={cat[1].title}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  subContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  borderLine: {
    borderBottomColor: "blue",
    marginTop: 4,
    marginBottom: 4,
    borderBottomWidth: 2,
    width: 70,
  },
  mainContainer: {
    display: "flex",
    marginTop: 24,
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "blue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Categories;
