import React from "react";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import SaleItem from "./Item";
import { getSales } from "../../redux/UserSlice";
import Empty from "../components/Empty";
import Loading from "../components/LoadingComponent";

const Sales = () => {
  const dispatch = useDispatch();
  const { sales, loading, user, token } = useSelector(
    (state: RootState) => state.user
  );

  
  React.useEffect(() => {
    dispatch(getSales({ user: user.email, token }));
  }, [getSales]);

  return (
    <ScrollView style={{ paddingBottom: "25%", backgroundColor: "#fff" }}>
      {loading ? (
        <Loading />
      ) : sales.length > 0 ? (
        sales.map((sale, index) => <SaleItem sale={sale} key={index} />)
      ) : (
        <Empty title="Currently no sales available" />
      )}
    </ScrollView>
  );
};

export default Sales;
