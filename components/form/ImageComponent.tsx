import React, { useState, useEffect } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

type NavigationProps = {
  navigate: (route: string) => void;
};
const ImageComponent: React.FC<{ image?: string }> = ({ image }) => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <View>
      <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate("camera")}>
          {!image && <Ionicon name="camera" size={100} color="#6b6767" />}
          {image !="" && (
            <Image
              style={styles.image}
              source={{
                uri: image,
              }}
            />
          )}
        </Pressable>

        {!image && <Text style={styles.text}>Add Image</Text>}
      </View>
    </View>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center" },
  text: {
    marginTop: -16,
    color: "skyblue",
    fontWeight: "bold",
    fontSize: 20,
  },
  image: {
    width: 150,
    height: 110,
    borderRadius: 10,
    marginLeft: 6,
    marginTop: 10,
  },
});
