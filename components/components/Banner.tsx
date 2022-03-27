import React from "react";
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Pressable } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import { RootState } from "../../redux/Store";


const Banner = () => {
  const navigation =useNavigation()
    const { user } = useSelector((state:RootState) => state.user);
    
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.goBack()} style={{ marginRight: 12 }}>
        <Ionicon name="chevron-back-outline" size={20} color="white" />
      </Pressable>
      <Pressable onPress={()=> navigation.navigate('Home' as never)} >
        <Ionicon name="home-outline" size={30} color="white" />
      </Pressable>
      <Text style={styles.greetings_text}>{user.name}</Text>
    </View>
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
