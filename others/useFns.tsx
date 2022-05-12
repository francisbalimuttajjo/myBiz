import axios from "axios";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import { mainStackParams } from "../types/types";

const UseFns = () => {
  const Stack = createStackNavigator<mainStackParams>();
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleDelete = async (id: number | undefined) => {
    try {
      setLoading(true);
      const res = await axios.delete(
        `http://192.168.43.96:5000/api/v1/cashItem/${id}`
      );
      if (res.data.status === "success") {
        setLoading(false);
        return true;
      }
      return false;
    } catch (err) {
      setLoading(false);
    }
  };
  return {
    handleDelete,
    loading,
    isLoggedIn,
    Stack,
  };
};

export default UseFns;
