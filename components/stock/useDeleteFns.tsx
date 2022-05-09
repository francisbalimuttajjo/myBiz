import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { NavigationProps } from "../../types/types";

const UseFns = () => {
  const { navigate } = useNavigation<NavigationProps>();
  const [confirmDelete, setConfirmDelete] = React.useState(false);
  const { user } = useSelector((state: RootState) => state.user);

  const createAlert = () =>
    Alert.alert("Delete", "Are you Sure? This action is irreversible", [
      {
        text: "Cancel",
        onPress: () => setConfirmDelete(false),
        style: "cancel",
      },
      { text: "Confirm", onPress: () => setConfirmDelete(true) },
    ]);

  return { navigate, createAlert, confirmDelete, user };
};

export default UseFns;
