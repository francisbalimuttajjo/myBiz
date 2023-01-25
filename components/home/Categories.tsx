import React from "react";
import Segment from "./Segment";
import { FlatList, View } from "react-native";

const categoriesArray: Array<
  Array<{ icon: string; title: string; name: string }>
> = [
  [
    { icon: "archive-outline", title: "Stock", name: "Inventory" },
    { icon: "wallet-outline", title: "Sales", name: "Point Of Sale" },
  ],
  [
    { icon: "book-outline", title: "CashBook", name: "Cash Book" },
    { icon: "book-outline", title: "SalesBook", name: "Sales" },
  ],
];

const Categories = () => {
  return (
    <View style={{ justifyContent: "space-around" }}>
      <FlatList
        contentContainerStyle={{ paddingVertical: "15%" }}
        data={categoriesArray}
        renderItem={({ item }) => (
          <Segment
            first_icon={item[0].icon}
            second_icon={item[1].icon}
            first_title={item[0].title}
            second_title={item[1].title}
            first_name={item[0].name}
            second_name={item[1].name}
          />
        )}
        keyExtractor={(item) => item[0].title}
      />
    </View>
  );
};

export default Categories;
