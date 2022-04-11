import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import StockComponent from '../../components/stock/Stock'


const Stock = () => {
  return (
   <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>   
        <StockComponent />
      </SafeAreaView>
     </SafeAreaProvider>
  );
};

export default Stock;

