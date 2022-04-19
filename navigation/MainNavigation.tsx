import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Stock from "./screens/Stock";
import CreditBook from "./screens/CreditBook";
import CashBook from "./screens/CashBook";
import Purchases from "./screens/Purchases";
import Sales from "./screens/Sales";
import Expenses from "./screens/Expenses";
import AddNew from "./screens/NewItem";
import NewCategory from "./screens/NewCategory";
import Camera from "./screens/Image";
import NewExpense from "./screens/NewExpense";
import Cart from "./screens/Cart";
import Home from "./screens/Home";
import CategoriesEdit from "./screens/EditCategories";
import EditStock from "./screens/EditStock";
import Cash from "./screens/Cash";
import BottomTabs from "./BottomTabs";
import EntryDetails from "./screens/EntryDetails";
import EditEntry from "./screens/EditEntry";
import { mainStackParams } from "../types/types";
import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";

const DetailsScreens = () => {
  const Stack = createStackNavigator<mainStackParams>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            headerStyle: { backgroundColor: "transparent" },
            // headerTintColor: "#fff",

            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="home"
            //component={Home}
            component={BottomTabs}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="entryDetails"
            component={EntryDetails}
            options={{
              title: "Entry Details",
            }}
          />
          <Stack.Screen
            name="editEntry"
            component={EditEntry}
            options={{
              title: "Edit Entry",
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => console.log("pressed")}
                  activeOpacity={0.6}
                  style={{
                    paddingHorizontal: "10%",
                  }}
                >
                  <Ionicon name="trash-outline" size={20} color="red" />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="editStock"
            component={EditStock}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Stock"
            component={Stock}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="cash" component={Cash} />
          <Stack.Screen
            name="camera"
            component={Camera}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="categoriesEdit"
            component={CategoriesEdit}
            options={({ route }) => ({
              title: ` Edit ${route.params.item.title} `,
            })}
          />

          <Stack.Screen
            name="New"
            component={AddNew}
            options={{
              title: "New Item",
            }}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{
              title: "Check Out",
            }}
          />
          <Stack.Screen
            name="Category"
            component={NewCategory}
            options={{
              title: " Add New Category",
            }}
          />
          <Stack.Screen
            name="Sales"
            component={Sales}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Expense" component={NewExpense} />

          <Stack.Screen name="Purchases" component={Purchases} />
          <Stack.Screen name="CreditBook" component={CreditBook} />
          <Stack.Screen name="CashBook" component={CashBook} />
          <Stack.Screen name="Expenses" component={Expenses} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default DetailsScreens;
