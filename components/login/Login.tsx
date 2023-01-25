import React from "react";
import { View } from "react-native";
import Logo from "./Logo";
import SignIn from "./SigInPage";
import SignUp from "./SignUpPage";
import Buttons from "./Buttons";

const Login = () => {
  const [status, setStatus] = React.useState<"signIn" | "signUp">("signIn");
  const changeToSignIn = () => setStatus("signIn");
  const changeToSignUp = () => setStatus("signUp");

  return (
    <View
      style={{
        height: "100%",
      }}
    >
      <Logo />
      <Buttons
        status={status}
        changeToSignIn={changeToSignIn}
        changeToSignUp={changeToSignUp}
      />

      {status === "signIn" && <SignIn />}
      {status === "signUp" && <SignUp />}
    </View>
  );
};

export default Login;
