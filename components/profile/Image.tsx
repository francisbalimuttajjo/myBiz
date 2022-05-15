import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Ionicon from "react-native-vector-icons/Feather";
import { useDispatch } from "react-redux";
import { changeToEditingProfileImage } from "../../redux/UserSlice";
import { NavigationProps } from "../../types/types";
const ImageComponent = (props: { name: string; image: string }) => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation<NavigationProps>();

  const handlePress = () => {
    dispatch(changeToEditingProfileImage());
    navigate("camera");
  };

  return (
    <View style={styles.main_container}>
      <View style={styles.sub_container}>
        <View style={styles.image_container}>
          {props.image ? (
            <Image
              style={{ backgroundColor: "red" }}
              source={{
                uri: props.image,
              }}
            />
          ) : (
            <Ionicon name="user" size={80} color="#5e5a5a" />
          )}

          <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            style={styles.btn}
          >
            <Ionicon name="edit-2" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.name_container}>
        <Text style={styles.name}>{props.name}</Text>
      </View>
    </View>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  main_container: {
    borderColor: "#e0e1e2",
    borderBottomWidth: 1,
    paddingVertical: 20,
  },
  sub_container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  image_container: {
    backgroundColor: "#e0d8d7",
    height: 140,
    width: 140,
    borderRadius: 70,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  btn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
    marginRight: -40,
    marginTop: 40,
  },
  name_container: {
    width: "100%",
    alignItems: "center",
    marginTop: 2,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "capitalize",
    opacity: 0.6,
  },
});
