import { useNavigation } from "@react-navigation/native";
import React from "react";

const UseFns = () => {
  const [visibleState, setVisibleState] = React.useState(false);
  const navigation = useNavigation();
  const displayToolKit = () => {
    setVisibleState(true);
  };
  const hideToolKit = () => {
    setVisibleState(false);
  };

  return { visibleState, navigation, displayToolKit, hideToolKit };
};

export default UseFns;
