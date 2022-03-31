import React from "react";
import Segment from "./Segment";
import { View } from "react-native";



const categoriesArray = [
  [
    { icon: "archive-outline", title: "Stock" },
    { icon: "book-outline", title: "CreditBook" },
  ],
  [
    { icon: "cart-outline", title: "Purchases" },
    { icon: "book-outline", title: "CashBook" },
  ],
  [
    { icon: "md-folder-open-outline", title: "Expenses" },
    { icon: "wallet-outline", title: "Sales" },
  ],
  
 
];

const Categories = () => {
  return (
  
      <View style={{ paddingVertical: 30 }}>
        {categoriesArray.map((category, index) => (
          <Segment
            key={index}
            first_icon={category[0].icon}
            second_icon={category[1].icon}
            first_title={category[0].title}
            second_title={category[1].title}
          />
        ))}
      </View>
   
  );
};

export default Categories;
