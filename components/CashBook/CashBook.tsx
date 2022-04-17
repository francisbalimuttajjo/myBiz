import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Horizontal from "../components/Horizontal";
import Search from "../components/Search";
import Balance from "./Balance";
import CashItem from "./CashItem";
import Btns from "./Btns";

const array = [
  {
    amount: 1200,
    category: "supplies",
    _id: "fdty90yjd",
    date: new Date(),
    title: "book keeping",
    type: "cash-in",
  },
  {
    amount: 1200,
    category: "supplies",
    _id: "78hui",
    date: new Date(),
    title: "book keeping",
    type: "cash-out",
  },
  {
    amount: 1200,
    category: "supplies",
    _id: "78klnh",
    date: new Date(),
    title: "book keeping",
    type: "cash-out",
  },
  {
    amount: 1200,
    category: "supplies",
    _id: "fdjd",
    date: new Date(),
    title: "book keeping",
    type: "cash-in",
  },
];
const CashBook = () => {
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
          <Balance amount_in={90000} amount_out={45090} />
          <Horizontal length={array.length} />
          <View style={{ paddingBottom: "50%" }}>
            {array.map((el) => (
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
