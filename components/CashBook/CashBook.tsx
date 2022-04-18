import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Horizontal from "../components/Horizontal";
import Search from "../components/Search";
import Balance from "./Balance";
import CashItem from "./CashItem";
import Btns from "./Btns";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { getDifference } from "../../utils";

const CashBook = () => {
  const { cashTransactions } = useSelector(
    (state: RootState) => state.cashBook
  );
  const [income, expenses] = getDifference(cashTransactions);
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View
          style={{
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
            backgroundColor: "#f0f2f5",
          }}
        >
          <Search
            placeholder="Search By Remark"
            clicked={false}
            handleChange={function (a: string): void {
              console.log("clicked");
            }}
            handleClicked={function (): void {
              console.log("clicked");
            }}
            searchPhrase={""}
            clearSearchField={function (): void {
              console.log("clicked");
            }}
            infoMsg={""}
          />
        </View>
        <ScrollView style={{ paddingTop: "20%" }}>
          <Balance amount_in={income} amount_out={expenses} />
          <Horizontal length={cashTransactions.length} />
          <View style={{ paddingBottom: "50%" }}>
            {cashTransactions.map((el) => (
              <CashItem item={el} key={el._id} />
            ))}
          </View>
        </ScrollView>
        <Btns />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default CashBook;
