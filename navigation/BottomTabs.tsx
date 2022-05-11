import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/Home";
import ProfileScreen from "./screens/Profile";
import TransactionsScreen from "./screens/Transactions";
import { MainRoutes } from "../types/types";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TabStackParams } from "../types/types";
import React from "react";

const TabsContainer = () => {
  const Tab = createBottomTabNavigator<TabStackParams>();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "";

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-sharp" : "person-outline";
          } else if (route.name === "Transactions") {
            iconName = focused ? "ios-flash-sharp" : "ios-flash-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: "skyblue",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: { paddingBottom: 2 },
      })}
    >
      <Tab.Group>
        <Tab.Screen
          options={{ headerShown: false }}
          name={MainRoutes.HomePage}
          component={HomeScreen}
        />
         <Tab.Screen
          name={MainRoutes.TransactionsPage}
          component={TransactionsScreen}
          options={{
            title: " Transactions",
          }}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Profile"
          component={ProfileScreen}
        />
       
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default TabsContainer;
