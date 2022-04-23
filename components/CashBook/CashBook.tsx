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
import { filter } from "../../redux/CashBook";
import { getDifference } from "../../utils";

const CashBook = () => {
  const { cashTransactions } = useSelector(
    (state: RootState) => state.cashBook
  );

   const [clicked, setClicked] = React.useState(false);
  const [searchPhrase, setSearchPhrase] = React.useState("");
  const dispatch = useDispatch();
    const handleClicked = () => setClicked(true);

  const handleChange = (val: string) => {
    setSearchPhrase(val);
    dispatch(filter(val));
  };

  const clearSearchField = () => {
    setSearchPhrase("");
    Keyboard.dismiss();
    setClicked(false);
    dispatch(filter(""));
  };
  const [income, expenses] = getDifference(cashTransactions);
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.search_container}>
          <Search
            placeholder="Search ..."
            clicked={clicked}
            handleChange={handleChange}
            handleClicked={handleClicked}
            searchPhrase={searchPhrase}
            clearSearchField={clearSearchField}
        
          />
        </View>
        <ScrollView style={{ paddingTop: "20%" }}>
          <Balance amount_in={+income} amount_out={+expenses} />
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
const styles = StyleSheet.create({
  search_container: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    backgroundColor: "#f0f2f5",
  },
});
