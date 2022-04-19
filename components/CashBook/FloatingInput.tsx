import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet, TextInput, Text, Animated } from "react-native";
import { FloatingLabelProps as Props } from "../../types/types";

const FloatingLabel = (props: Props) => {
  const moveText = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (props.value !== "") {
      moveTextTop();
    } else if (props.value === "") {
      moveTextBottom();
    }
  }, [props.value]);

  const onFocusHandler = () => {
    if (props.value !== "") {
      moveTextTop();
    }
  };

  const onBlurHandler = () => {
    if (props.value === "") {
      moveTextBottom();
    }
  };

  const moveTextTop = () => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const moveTextBottom = () => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const yVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [4, -20],
  });

  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  };
  const getTextColor = () => {
    if (props.item.type === "cash-in" && props.keyboard) {
      return "green";
    }
    if (props.item.type === "cash-out" && props.keyboard) {
      return "red";
    }
    return "black";
  };
  return (
      <View style={{ ...styles.container,borderColor:props.error ? 'red':'#bdbdbd' }}>
      <Animated.View style={[styles.animatedStyle, animStyle]}>
        <Text style={styles.label}>{props.label} </Text>
      </Animated.View>
      <TextInput
        autoCapitalize={"none"}
        style={{
          ...styles.input,
          color: getTextColor(),
        }}
        keyboardType={props.keyboard ? "numeric" : "default"}
        value={props.value}
        onChangeText={(text: string) => props.onChange(text)}
        editable={true}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        blurOnSubmit
      />
    </View>
  );
};
export default FloatingLabel;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginTop: 20,
    paddingTop: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    // borderColor: "#bdbdbd",
    // #bdbdbd
    borderRadius: 7,
    width: "90%",
    alignSelf: "center",
  },

  input: {
    fontSize: 13,
    height: 40,

    paddingTop: 5,
  },
  label: {
    color: "grey",
    fontSize: 16,
  },
  animatedStyle: {
    top: -1,
    left: 15,
    position: "absolute",
    borderRadius: 90,
    zIndex: 10000,
  },
});
