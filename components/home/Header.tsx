import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import Logo from '../components/Logo'

export type Props = { user: { name?: string; imageSrc?: string }};

const Header: React.FC<Props> = (props) => {
  
  return (
    <View>
   <Logo />
      <View style={styles.container}>
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

        <Text style={styles.greetings_text}> Hi, {props.user.name}</Text>
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
