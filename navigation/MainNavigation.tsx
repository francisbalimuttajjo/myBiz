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
import Camera from "./screens/Image";
import NewExpense from "./screens/NewExpense";
import CategoriesEdit from "./screens/EditCategories";
import EditStock from "./screens/EditStock";
import BottomTabs from "./BottomTabs";

export type mainStackParams = {
  Stock: undefined;
  CreditBook: undefined;
  CashBook: undefined;
  Purchases: undefined;
  home: undefined;
  Sales: undefined;
  Expenses: undefined;
  Expense: undefined;
  Category: undefined;
  editStock: undefined;
  camera:  undefined ;
  categoriesEdit: { item: { title: undefined; id: undefined } };
  Details: {
    id: undefined;
  };
  New: undefined;
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
            name="Category"
            component={NewCategory}
            options={{
              title: " Add New Category",
            }}
          />
          <Stack.Screen name="Expense" component={NewExpense} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Purchases" component={Purchases} />
          <Stack.Screen name="CreditBook" component={CreditBook} />
          <Stack.Screen name="CashBook" component={CashBook} />
          <Stack.Screen name="Expenses" component={Expenses} />
          <Stack.Screen name="Sales" component={Sales} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default DetailsScreens;
