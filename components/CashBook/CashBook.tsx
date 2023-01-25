import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Horizontal from "../components/Horizontal";
import Search from "../components/Search";
import Balance from "./Balance";
import CashItem from "./CashItem";
import Btns from "./Btns";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { filterCashItems } from "../../redux/CashBook";
import { getCashItems } from "../../redux/others/cashbook";
import { getDifference } from "../../utils";
import Loading from "../components/LoadingComponent";

const CashBook = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  const { cashTransactions, store, loading } = useSelector(
    (state: RootState) => state.cashBook
  );
  const { user, token } = useSelector((state: RootState) => state.user);

  const [income, expenses] = getDifference(store);

  const onChangeSearch = (query: string) => {
    dispatch(filterCashItems(query));
    setSearchQuery(query);
  };

  React.useEffect(() => {
    dispatch(getCashItems({ user: user.email, token }));
  }, [getCashItems]);

  return (
    <View style={{ height: "100%" }}>
      {loading ? (
        <Loading />
      ) : (
        <>
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
        </>
      )}
    </View>
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
