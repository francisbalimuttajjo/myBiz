import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Stock from "./screens/Stock";
import CashBook from "./screens/CashBook";
import Sales from "./screens/Sales";
import AddNew from "./screens/NewItem";
import Transactions from "./screens/Transactions";
import NewCategory from "./screens/NewCategory";
import Camera from "./screens/Camera";
import LoginPage from "./screens/Login";
import SalesList from "./screens/NewExpense";
import Cart from "./screens/Cart";
import CategoriesEdit from "./screens/EditCategories";
import EditStock from "./screens/EditStock";
import CashIn from "./screens/CashIn";
import CashOut from "./screens/CashOut";
import BottomTabs from "./BottomTabs";
import EntryDetails from "./screens/EntryDetails";
import EditEntry from "./screens/EditEntry";
import { mainStackParams } from "../types/types";
import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";

const Screens = () => {
  const Stack = createStackNavigator<mainStackParams>();
  const { isLoggedIn } = useSelector((state: RootState) => state.user);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            headerStyle: { backgroundColor: "transparent" },
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          {!isLoggedIn && (
            <Stack.Screen
              name="login"
              component={LoginPage}
              options={{ headerShown: false }}
            />
          )}
          {isLoggedIn && (
            <>
              <Stack.Screen
                name="home"
                component={BottomTabs}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CashInEntry"
                component={CashIn}
                options={{
                  title: "New Cash In Entry",
                }}
              />
              <Stack.Screen
                name="CashOutEntry"
                component={CashOut}
                options={{
                  title: "New Cash Out Entry",
                }}
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
                options={({ route }) => {
                  return {
                    title: " Edit Entry",
                    headerRight: () => (
                      <TouchableOpacity
                        onPress={() => console.log(route.params.id)}
                        activeOpacity={0.6}
                        style={{
                          paddingHorizontal: "10%",
                        }}
                      >
                        <Ionicon name="trash-outline" size={20} color="red" />
                      </TouchableOpacity>
                    ),
                  };
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
              <Stack.Screen name="Transactions" component={Transactions} />
              <Stack.Screen name="SalesBook" component={SalesList} />
              <Stack.Screen name="CashBook" component={CashBook} />
            </>
          )}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screens;
