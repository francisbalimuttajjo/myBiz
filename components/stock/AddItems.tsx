import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { Text, View, TouchableOpacity } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import { NavigationProps, ToolTipProps } from "../../types/types";

const AddItems = (props: { hideToolKit: ToolTipProps["closeToolTip"] }) => {
  const navigation = useNavigation<NavigationProps>();

  const handleNavigation = (url: string) => {
    props.hideToolKit();
    navigation.navigate(url);
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.container}
        onPress={() => handleNavigation("New")}
      >
        <Ionicon name="add-outline" size={20} color="skyblue" />
        <Text style={styles.text}>Add Item</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.container}
        onPress={() => handleNavigation("Category")}
      >
        <Ionicon name="add-outline" size={20} color="skyblue" />
        <Text style={styles.text}>Add Category</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItems;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  text: {
    color: "skyblue",
    fontWeight: "700",
  },
});
