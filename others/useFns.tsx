import axios from "axios";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import { mainStackParams } from "../types/types";

const UseFns = () => {
  const Stack = createStackNavigator<mainStackParams>();
  const { isLoggedIn, token } = useSelector((state: RootState) => state.user);
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleDelete = async (id: number | undefined) => {
    try {
      setLoading(true);
      const res = await axios.delete(
        `https://team-francisbalimuttajjo-backendmybiz-5695-master-olxjr2ly7a-wm.a.run.app/api/v1/cashItem/${id}`,
        { headers: { "Content-Type": "application/json", token } }
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
