import {Text} from 'react-native';

export default function Camera() {
  return <Text>Camera</Text>;
}

// import React, { useEffect } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   ImageBackground,
//   ActivityIndicator,
// } from "react-native";
// import { Camera } from "expo-camera";
// import { Ionicons, MaterialIcons } from "@expo/vector-icons";
// import useCamera from "./useCamera";
// import Error from "../components/Error";

// const CameraComponent = () => {
//   const {
//     flipCamera,
//     pickImage,
//     takePicture,
//     hasPermission,
//     setHasPermission,
//     image,
//     setCamera,
//     type,
//     loading,
//     uploadImage,
//     setImage,
//     isFocused,
//   } = useCamera();

//   //seeking device permision
//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       setHasPermission(status === "granted");
//     })();
//   }, []);

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Error info=" No access to camera" />;
//   }

//   return (
//     <View style={styles.main_container}>
//       {!image && isFocused && (
//         <View style={styles.container}>
//           <Camera
//             style={styles.camera}
//             type={type}
//             ratio={"1:1"}
//             ref={(ref) => setCamera(ref)}
//           >
//             <View style={styles.icon_container}>
//               <TouchableOpacity onPress={flipCamera}>
//                 <MaterialIcons name="flip-camera-ios" size={30} color="white" />
//               </TouchableOpacity>
//             </View>
//             <View style={styles.bottom_container}>
//               <TouchableOpacity onPress={takePicture}>
//                 <Ionicons name="camera" size={40} color="white" />
//               </TouchableOpacity>
//               <TouchableOpacity onPress={pickImage} style={styles.gallery}>
//                 <Text style={{ color: "white" }}> Choose from Gallery </Text>
//               </TouchableOpacity>
//             </View>
//           </Camera>
//         </View>
//       )}
//       {image && (
//         <ImageBackground
//           source={{ uri: image }}
//           style={styles.background_image}
//           imageStyle={{
//             resizeMode: "contain",
//           }}
//         >
//           <TouchableOpacity
//             activeOpacity={0.8}
//             onPress={uploadImage}
//             style={styles.save_container}
//             disabled={loading}
//           >
//             {!loading && <Text style={styles.save_text}> Save </Text>}
//             {loading && <ActivityIndicator size="small" color="white" />}
//           </TouchableOpacity>
//           <TouchableOpacity
//             activeOpacity={0.8}
//             disabled={loading}
//             style={styles.save_container}
//             onPress={() => setImage(null)}
//           >
//             <Text style={styles.save_text}>Retake</Text>
//           </TouchableOpacity>
//         </ImageBackground>
//       )}
//     </View>
//   );
// };
// export default CameraComponent;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "row",
//   },
//   save_container: {
//     borderRadius: 20,
//     backgroundColor: "skyblue",
//     width: 80,
//     height: 40,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   icon_container: {
//     position: "absolute",
//     top: 40,
//     marginLeft: 20,
//   },
//   main_container: {
//     flex: 1,
//   },
//   background_image: {
//     flex: 1,
//     paddingBottom: "10%",
//     width: "100%",
//     height: "100%",
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "flex-end",
//   },
//   gallery: { alignSelf: "center", marginHorizontal: 60 },
//   bottom_container: {
//     position: "absolute",
//     bottom: 10,
//     paddingLeft: 80,
//     flexDirection: "row",
//   },
//   camera: { aspectRatio: 1 },
//   save_text: {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: 20,
//   },
// });
