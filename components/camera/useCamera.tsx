import { useState } from "react";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addImage } from "../../redux/StockSlice";
import { RootState } from "../../redux/Store";
import { firebaseConfig } from "../../firebase/firebase";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

type NavigationProps = {
  navigate: (route: string) => void;
};

const UseCamera = () => {
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState<any>(null);
  const [image, setImage] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProps>();
  const { user } = useSelector((state: RootState) => state.user);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImage(data.uri);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const flipCamera = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  initializeApp(firebaseConfig);

  const uploadImage = async () => {
    setLoading(true);
    const storage = getStorage();
    let name = `${user.email}-${Date.now()}`;
    const reference = ref(storage, `${name}.jpg`);
    //convertingimage to array of bytes
    const img = await fetch(image);

    const convertedImage = await img.blob();
    uploadBytes(reference, convertedImage).then(() =>
      getDownloadURL(reference).then((url) => {
        dispatch(addImage(url));
        setLoading(false);
        navigation.navigate("New");
      })
    );
  };
  return {
    flipCamera,
    pickImage,
    takePicture,
    hasPermission,
    setHasPermission,
    image,
    setCamera,
    type,
    loading,
    uploadImage,
  };
};

export default UseCamera;
