import React from 'react';
// import AppLoading from "expo-app-loading";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

import Login from '../../components/login/Login';
// import useFns from "../../others/useLoginFns";

const LoginScreen = () => {
  // const { isAuthenticating, getAuthenticated, setIsAuthenticating } = useFns();

  // if (isAuthenticating) {
  //   return (
  //     <AppLoading
  //       startAsync={getAuthenticated}
  //       onFinish={() => setIsAuthenticating(false)}
  //       onError={console.warn}
  //     />
  //   );
  // }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Login />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default LoginScreen;
