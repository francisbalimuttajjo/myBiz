import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addToken, addUser } from "../redux/UserSlice";

const UseFns = () => {
  const dispatch = useDispatch();
  const [isAuthenticating, setIsAuthenticating] = React.useState(true);

  const getAuthenticated = async () => {
    try {
      const token = await AsyncStorage.getItem("token");

      const result = await axios.post(
        `https://team-francisbalimuttajjo-backendmybiz-5695-master-olxjr2ly7a-wm.a.run.app/api/v1/users/auth/${token}`
      );

      if (result.data.status === "success") {
        const { firstName, lastName, email, photo } = result.data.data;

        dispatch(
          addUser({ user: { firstName, lastName, email, image: photo } })
        );

        dispatch(addToken({ token }));
      }
      setIsAuthenticating(false);
    } catch (er) {
      setIsAuthenticating(false);
    }
  };

  return { isAuthenticating, getAuthenticated, setIsAuthenticating };
};

export default UseFns;
