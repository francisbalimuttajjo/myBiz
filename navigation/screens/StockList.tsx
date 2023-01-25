import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import StockList from '../../components/stock/Stock'


const Stock = () => {
  return (
   <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>   
        <StockList />
      </SafeAreaView>
     </SafeAreaProvider>
  );
};

export default Stock;

