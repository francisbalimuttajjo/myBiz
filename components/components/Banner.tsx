import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import { RootState } from "../../redux/Store";
import { NavigationProps } from "../../types/types";

const Banner = () => {
  const navigation = useNavigation<NavigationProps>();
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <Pressable onPress={() => navigation.goBack()} style={styles.container}>
      <View style={{ marginRight: 12 }}>
        <Ionicon name="chevron-back-outline" size={20} color="white" />
      </View>
      <View>
        <Ionicon name="home-outline" size={30} color="white" />
      </View>
      <Text style={styles.greetings_text}>{user.firstName}</Text>
    </Pressable>
  );
};

export default Banner;

const styles = StyleSheet.create({
  greetings_text: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 6,
  },
  container: {
    backgroundColor: "skyblue",
    paddingVertical: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 12,
  },
});
