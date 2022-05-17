import React from "react";
import { FlatList, RefreshControl } from "react-native";
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

  if (loading) {
    return <Loading />;
  }
  if (sales.length > 0) {
    return (
      <FlatList
        contentContainerStyle={{
          paddingBottom: "40%",
          minHeight: "100%",
          backgroundColor: "#fff",
        }}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() => dispatch(getSales({ user: user.email, token }))}
          />
        }
        data={sales}
        renderItem={(item) => <SaleItem sale={item.item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
  return <Empty title="Currently no sales available " />;
};

export default Sales;
