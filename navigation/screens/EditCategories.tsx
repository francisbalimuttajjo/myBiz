import React from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { mainStackParams } from "../../types/types";
import Category from "../../components/category/EditCategory";

type Props = NativeStackScreenProps<mainStackParams, "categoriesEdit">;

const Categories = ({ route }: Props) => {
  const { item } = route.params;
 
  return (
 
    <Category item={item} />

  );
};

export default Categories;
