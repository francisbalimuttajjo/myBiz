import React from "react";
import Segment from "./Segment";
import { View, ScrollView } from "react-native";

export type Props = {
  icon1: string;
  icon2: string;
  title1: string;
  title2: string;
};

const categoriesArray = [
  [
    { icon: "archive-outline", title: "Stock" },
    { icon: "book-outline", title: "Credit book" },
  ],
  [
    { icon: "cart-outline", title: "Purchases" },
    { icon: "book-outline", title: "Cash book" },
  ],
  [
    { icon: "md-folder-open-outline", title: "Expenses" },
    { icon: "wallet-outline", title: "Sales" },
  ],
];

const Categories = () => {
  return (
    <ScrollView>
      <View style={{ paddingVertical: 30 }}>
        {categoriesArray.map((category, index) => (
          <Segment
            key={index}
            icon1={category[0].icon}
            icon2={category[1].icon}
            title1={category[0].title}
            title2={category[1].title}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Categories;
