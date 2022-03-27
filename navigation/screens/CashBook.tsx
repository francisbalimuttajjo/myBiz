import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const CashBook = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>cash book</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default CashBook;
