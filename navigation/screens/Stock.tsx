import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import StockComponent from '../../components/stock/Stock'

const Stock = () => {
  return (
   <SafeAreaProvider>
       <SafeAreaView>
        <StockComponent />
      </SafeAreaView>
     </SafeAreaProvider>
  );
};

export default Stock;

