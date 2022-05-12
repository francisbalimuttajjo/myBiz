import React from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import Stock from "./screens/StockList";
import CashBook from "./screens/CashBook";
import Sales from "./screens/Sales";
import AddNew from "./screens/NewStockItem";
import Transactions from "./screens/Transactions";
import NewCategory from "./screens/NewCategory";
import Camera from "./screens/Camera";
import LoginPage from "./screens/Login";
import SalesBook from "./screens/SalesBook";
import Cart from "./screens/Cart";
import CategoriesEdit from "./screens/EditCategories";
import EditStock from "./screens/EditStock";
import CashIn from "./screens/CashIn";
import CashOut from "./screens/CashOut";
import BottomTabs from "./BottomTabs";
import EntryDetails from "./screens/CashEntryDetails";
import EditEntry from "./screens/EditCashEntry";
import useFns from "../others/useFns";

const Screens = () => {
  const { handleDelete, loading, isLoggedIn, Stack } = useFns();

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
                name="editCashEntry"
                component={EditEntry}
                options={({ navigation, route }) => {
                  return {
                    title: " Edit Entry",
                    headerRight: () => (
                      <TouchableOpacity
                        disabled={loading}
                        onPress={async () => {
                          const res = await handleDelete(route.params.id);
                          if (res) {
                            navigation.goBack();
                            navigation.navigate("Home");
                          }
                        }}
                        activeOpacity={0.6}
                        style={{
                          paddingHorizontal: "10%",
                        }}
                      >
                        {!loading && (
                          <Ionicon name="trash-outline" size={20} color="red" />
                        )}
                        {loading && (
                          <ActivityIndicator size="small" color="skyblue" />
                        )}
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
                  title: "New Stock Item",
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
              <Stack.Screen name="SalesBook" component={SalesBook} />
              <Stack.Screen name="CashBook" component={CashBook} />
            </>
          )}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screens;
