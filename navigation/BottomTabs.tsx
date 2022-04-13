import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/Home";
import ProfileScreen from "./screens/Profile";
import TransactionsScreen from "./screens/Transactions";
import MoreScreen from "./screens/More";
import { MainRoutes } from "../types/types";
import Ionicons from "react-native-vector-icons/Ionicons";
import {TabStackParams} from '../types/types'



const TabsContainer = () => {
  const Tab = createBottomTabNavigator<TabStackParams>();
  return (
    
    <Tab.Navigator
      
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
                let iconName='';

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person-sharp" : "person-outline";
            } else if (route.name === "Transactions") {
              iconName = focused ? "ios-flash-sharp" : "ios-flash-outline";
            } else if (route.name === "More") {
              iconName = focused ? "ios-list-sharp" : "ios-list-outline";
            }

            return <Ionicons name={iconName } size={size} color={color} />;
          },

          tabBarActiveTintColor: "skyblue",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: { paddingBottom: 2 },
        })}
      >
        <Tab.Screen
          options={{ headerShown: false }}
          //name={MainRoutes.HomePage}
          name={MainRoutes.HomePage}
          component={HomeScreen}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          //name={MainRoutes.ProfilePage}
          name="Profile"
          component={ProfileScreen}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name={MainRoutes.TransactionsPage}
          component={TransactionsScreen}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name={MainRoutes.MorePage}
          component={MoreScreen}
      />
      
      </Tab.Navigator>
    
  );
};

export default TabsContainer;
