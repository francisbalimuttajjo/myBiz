import React from "react";
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Horizontal from "../components/Horizontal";
import Search from "../components/Search";
import Balance from "./Balance";
import CashItem from "./CashItem";
import Btns from "./Btns";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { filterCashItems } from "../../redux/CashBook";
import { getDifference } from "../../utils";

const CashBook = () => {
  const { cashTransactions,store } = useSelector(
    (state: RootState) => state.cashBook
  );
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const onChangeSearch = (query: string) => {
    dispatch(filterCashItems(query));
    setSearchQuery(query);
  };

  const [income, expenses] = getDifference(store);
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.search_container}>
          <Search
            placeholder="Search ..."
            searchQuery={searchQuery}
            onChangeSearch={onChangeSearch}
          />
        </View>
        <ScrollView style={{ paddingTop: "20%" }}>
          <Balance amount_in={+income} amount_out={+expenses} />
          <Horizontal length={cashTransactions.length} />
          <View style={{ paddingBottom: "50%" }}>
            {cashTransactions.map((el) => (
              <CashItem item={el} key={el.id} />
            ))}
          </View>
        </ScrollView>
        <Btns />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default CashBook;
const styles = StyleSheet.create({
  search_container: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    backgroundColor: "#f0f2f5",
  },
});
