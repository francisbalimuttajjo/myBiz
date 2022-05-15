import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
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
        {props.image !== "" && (
          <View style={styles.image_container}>
            <ImageBackground
              source={{ uri: props.image }}
              borderRadius={70}
              resizeMode="cover"
              style={{ width: 140, height: 140, borderRadius: 70 }}
            ></ImageBackground>
            <TouchableOpacity
              onPress={handlePress}
              activeOpacity={0.7}
              style={[styles.btn, styles.image_btn]}
            >
              <Ionicon name="edit-2" size={20} color="white" />
            </TouchableOpacity>
          </View>
        )}

        {props.image === "" && (
          <View style={styles.image_container}>
            <Ionicon name="user" size={80} color="#5e5a5a" />
            <TouchableOpacity
              onPress={handlePress}
              activeOpacity={0.7}
              style={[styles.btn, styles.icon_btn]}
            >
              <Ionicon name="edit-2" size={20} color="white" />
            </TouchableOpacity>
          </View>
        )}
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
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
  },
  image_btn: { right: -25, bottom: 20, position: "absolute" },
  icon_btn: { marginRight: -40, marginTop: 40 },
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

//
