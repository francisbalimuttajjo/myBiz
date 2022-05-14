import React from "react";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { getTransactions } from "../../redux/UserSlice";
import LoadingComponent from "../components/LoadingComponent";
import Empty from "../components/Empty";
import TransactionItem from "./Item";

const Transactions = () => {
  const dispatch = useDispatch();
  const { transactions, loading, user, token } = useSelector(
    (state: RootState) => state.user 
  );

  React.useEffect(() => {
    dispatch(getTransactions({ user: user.email, token }));
  }, [getTransactions]);

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      {loading ? (
        <LoadingComponent />
      ) : transactions.length > 0 ? (
        transactions.map((el, index) => (
          <TransactionItem item={el} key={index} />
        ))
      ) : (
        <Empty title="You dont have any transactions currently, click Home and add " />
      )}
    </ScrollView>
  );
};

export default Transactions;
