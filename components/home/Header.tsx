import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";

export type Props = { user: { name: string; imageSrc?: string } };

const Header: React.FC<Props> = (props) => {
  return (
    <View>
      <View style={styles.container}>
        <Ionicon name="cash-outline" size={40} color="skyblue" />
        <Text style={styles.text1}> My</Text>
        <Text style={styles.text2}>Bizz</Text>
      </View>
      <View style={styles.subContainer}>
        {!props.user.imageSrc && (
          <Ionicon name="ios-person-circle-outline" size={40} color="white" />
        )}
        {props.user.imageSrc && (
          <Image
            style={styles.image}
            source={{
              uri: props.user.imageSrc,
            }}
          />
        )}

        <Text style={styles.text3}>Hi, {props.user.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    backgroundColor: "skyblue",
    paddingVertical: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 12,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
   
    paddingBottom: 10,
    paddingLeft: 12,
    alignItems: "center",
  },
  text2: {
    color: "skyblue",
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
    marginLeft: 6,
  },
  image: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
});

export default Header;
