import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import Logo from "../components/Logo";
import { HeaderProps as Props, NavigationProps } from "../../types/types";
import { useNavigation } from "@react-navigation/native";

const Header: React.FC<Props> = (props) => {
  const { navigate } = useNavigation<NavigationProps>();
  const handleNavigation = () => navigate("Profile");

  return (
    <View>
      <Logo />
      <View style={styles.container}>
        {!props.user.image && (
          <TouchableOpacity onPress={handleNavigation}>
            <Ionicon name="ios-person-circle-outline" size={40} color="white" />
          </TouchableOpacity>
        )}
        {props.user.image && (
          <Image
            style={styles.image}
            source={{
              uri: props.user.image,
            }}
          />
        )}

        <Text style={styles.greetings_text}> Hi, {props.user.firstName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "skyblue",
    paddingVertical: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 12,
  },

  greetings_text: {
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
