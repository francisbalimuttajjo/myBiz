import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert } from "react-native";

type NavigationProps = {
  navigate: (route: string, params?: { id: string }) => void;
};
const UseFns = () => {
  const { navigate } = useNavigation<NavigationProps>();
  const [confirmDelete, setConfirmDelete] = React.useState(false);

  const createAlert = () =>
    Alert.alert("Delete", "Are you Sure? This action is irreversible", [
      {
        text: "Cancel",
        onPress: () => setConfirmDelete(false),
        style: "cancel",
      },
      { text: "Confirm", onPress: () => setConfirmDelete(true) },
    ]);

  return { navigate, createAlert, confirmDelete };
};

export default UseFns;
