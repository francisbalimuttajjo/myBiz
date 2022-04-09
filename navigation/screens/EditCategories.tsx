import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { mainStackParams } from "../MainNavigation";
import Category from "../../components/category/EditCategory";
type Props = NativeStackScreenProps<mainStackParams, "categoriesEdit">;

const Categories = ({ route, navigation }: Props) => {
  const { item } = route.params;
  return (
    // <SafeAreaProvider>
    //   <SafeAreaView>
        <Category item={item} />
      /* </SafeAreaView>
    </SafeAreaProvider> */
  );
};

export default Categories;
