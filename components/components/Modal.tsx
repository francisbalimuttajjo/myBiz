import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
type Props = {
  modalVisible: boolean;
  closeModal: () => void;
};
type NavigationProps = {
  navigate: (route: string) => void;
};
const ModalComponent: React.FC<Props> = (props) => {
  const navigation = useNavigation<NavigationProps>();
  const [pickedImagePath, setPickedImagePath] = React.useState("");

  // This function is triggered when the "Select an image" button pressed
  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  };

  // This function is triggered when the "Open camera" button pressed
  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={props.closeModal}
    >
      <View style={[styles.container, styles.center]}>
        <View style={styles.sub_container}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Choose Image Source
            </Text>
            <View
              style={{
                ...styles.center,
                height: "70%",
              }}
            >
              <TouchableOpacity activeOpacity={0.5} onPress={openCamera}>
                <Text style={{ fontSize: 18, marginBottom: 15 }}>
                  Take Photo
                </Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} onPress={showImagePicker}>
                <Text style={{ fontSize: 18 }}>Gallery</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={props.closeModal}
              style={styles.cancel_btn}
              activeOpacity={0.5}
            >
              <Text style={styles.cancel_text}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;
const styles = StyleSheet.create({
  cancel_text: { color: "skyblue", fontWeight: "bold" },
  cancel_btn: { alignSelf: "flex-end", marginRight: -20 },
  center: { alignItems: "center", justifyContent: "center" },
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: "100%",
    width: "100%",
  },
  sub_container: {
    backgroundColor: "white",
    height: "25%",
    width: "70%",
    borderRadius: 15,
    alignItems: "center",
    paddingVertical: 10,
  },
});
