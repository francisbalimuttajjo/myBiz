import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const CreditBook = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>credit book</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default CreditBook;
