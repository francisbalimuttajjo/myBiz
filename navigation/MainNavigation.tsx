import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Stock from "./screens/Stock";
import CreditBook from "./screens/CreditBook";
import CashBook from "./screens/CashBook";
import Purchases from "./screens/Purchases";
import Sales from "./screens/Sales";
import Details from "./screens/Details";
import Expenses from "./screens/Expenses";
import AddNew from "./screens/NewItem";
import NewCategory from "./screens/NewCategory";
import Camera from "./screens/Camera";
import NewExpense from "./screens/NewExpense";
import BottomTabs from "./BottomTabs";

export type mainStackParams = {
  Stock: undefined;
  CreditBook: undefined;
  CashBook: undefined;
  Purchases: undefined;
  home: undefined;
  Sales: undefined;
  Expenses: undefined;
  New: undefined;
  Expense: undefined;
  Category: undefined;
  camera: undefined;
  Details: {
    id: undefined;
  };
};

const DetailsScreens = () => {
  const Stack = createStackNavigator<mainStackParams>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Group
          screenOptions={{
            headerStyle: { backgroundColor: "skyblue" },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
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

          <Stack.Screen name="CreditBook" component={CreditBook} />
          <Stack.Screen name="CashBook" component={CashBook} />
          <Stack.Screen name="Expenses" component={Expenses} />
          <Stack.Screen name="Sales" component={Sales} />
          <Stack.Screen
            name="New"
            component={AddNew}
            options={{
              title: "New Item",
            }}
          />
          <Stack.Screen name="Category" component={NewCategory} />
          <Stack.Screen name="Expense" component={NewExpense} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Purchases" component={Purchases} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default DetailsScreens;
