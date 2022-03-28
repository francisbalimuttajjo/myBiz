import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import { Text, View, TouchableOpacity } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";

const AddItems = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const handleNavigation = (url: string) => navigation.navigate(url);

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
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.container}
        onPress={() => handleNavigation("Expense")}
      >
        <Ionicon name="add-outline" size={20} color="skyblue" />
        <Text style={styles.text}>Add Expense</Text>
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
    marginBottom: 10,
  },
  text: {
    color: "skyblue",
    fontWeight: "700",
  },
});
