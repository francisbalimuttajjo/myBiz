import React from "react";
import Segment from "./Segment";
import { FlatList, View } from "react-native";

const categoriesArray = [
  [
    { icon: "archive-outline", title: "Stock" },
    { icon: "wallet-outline", title: "Sales" },
  ],
  [
    { icon: "book-outline", title: "CashBook" },
    { icon: "book-outline", title: "SalesBook" },
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
          />
        )}
        keyExtractor={(item) => item[0].title}
      />
    </View>
  );
};

export default Categories;
