import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import Ionicon from "react-native-vector-icons/Ionicons";

export default function CameraComponent() {
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState<any>(null);
  const [image, setImage] = useState<any>(null);

  //seeking device permision
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  //t
  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImage(data.uri);
      console.log(data.uri);
    }
  };
  const flipCamera = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // if (isFocused) { }
  return (
    <View style={styles.main_container}>
      <View style={styles.container}>
        <Camera
          style={styles.camera}
          type={type}
          ratio={"1:1"}
          ref={(ref) => setCamera(ref)}
        >
          <View style={styles.icon_container}>
            <TouchableOpacity onPress={flipCamera}>
              <Ionicon name="sync-outline" size={30} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.bottom_container}>
            <TouchableOpacity onPress={takePicture}>
              <Ionicon name="camera" size={40} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={pickImage} style={styles.gallery}>
              <Text style={{ color: "white" }}> Choose from Gallery </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>

      {image && <Image source={{ uri: image }} style={styles.main_container} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  icon_container: {
    position: "absolute",
    top: 40,
    marginLeft: 20,
  },
  main_container: {
    flex: 1,
  },
  gallery: { alignSelf: "center", marginHorizontal: 60 },
  bottom_container: {
    position: "absolute",
    bottom: 10,
    paddingLeft: 80,
    flexDirection: "row",
  },
  camera: { aspectRatio: 1 },
});
