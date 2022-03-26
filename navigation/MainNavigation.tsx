import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Stock from "./screens/Stock";
import CreditBook from "./screens/CreditBook";
import CashBook from "./screens/CashBook";
import Purchases from "./screens/Purchases";
import Sales from "./screens/Sales";
import Expenses from "./screens/Expenses";
import BottomTabs from "./BottomTabs";

export type mainStackParams = {
  Stock: undefined;
  CreditBook: undefined;
  CashBook: undefined;
  Purchases: undefined;
  home: undefined;
  Sales: undefined
  Expenses:undefined
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
        <Stack.Screen name="Stock" component={Stock} />
        <Stack.Screen name="CreditBook" component={CreditBook} />
        <Stack.Screen name="CashBook" component={CashBook} />
        <Stack.Screen name="Expenses" component={Expenses} />
        <Stack.Screen name="Sales" component={Sales} />
        <Stack.Screen name="Purchases" component={Purchases} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default DetailsScreens;
