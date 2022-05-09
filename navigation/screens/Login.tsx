import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Login from "../../components/login/Login";

const LoginScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Login />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default LoginScreen;
