import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const Expenses = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>expenses</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Expenses;
