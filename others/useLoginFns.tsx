import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addToken, addTransactions, addUser } from "../redux/UserSlice";

const UseFns = () => {
  const dispatch = useDispatch();
  const [isAuthenticating, setIsAuthenticating] = React.useState(true);

  const getAuthenticated = async () => {
    try {
      const token = await AsyncStorage.getItem("token");

      const result = await axios.post(
        `http://192.168.43.96:5000/api/v1/users/auth/${token}`
      );
      if (result.data.status === "success") {
        const { firstName, lastName, email, image, transactions } =
          result.data.data;

        dispatch(addUser({ user: { firstName, lastName, email, image } }));
        dispatch(addTransactions({ transactions }));
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
