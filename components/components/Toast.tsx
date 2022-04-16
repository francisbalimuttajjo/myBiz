import React, { useState, useEffect } from "react";
import { ToastAndroid } from "react-native";

const Toast = (props: { visible: boolean; message: string }) => {
  if (props.visible) {
    ToastAndroid.showWithGravityAndOffset(
      props.message,
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      40,
      50
    );
    return null;
  }
  return null;
};

export default Toast;
