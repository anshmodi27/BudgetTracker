import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Expenses from "./Expenses";
import Setting from "./Setting";
import Reports from "./Reports";
import Add from "./Add";
import { theme } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route, color }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Expenses") {
              iconName = focused ? "rupee" : "rupee";
              return <FontAwesome name={iconName} size={size} color={color} />;
            } else if (route.name === "Reports") {
              iconName = focused ? "stats-chart" : "stats-chart-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === "Add") {
              iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (route.name === "Setting") {
              iconName = focused ? "settings" : "settings-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            }
          },
          headerStyle: { backgroundColor: theme.colors.background },
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { backgroundColor: theme.colors.background },
        })}
      >
        <Tab.Screen name="Expenses" component={Expenses} />
        <Tab.Screen name="Reports" component={Reports} />
        <Tab.Screen name="Add" component={Add} />
        <Tab.Screen name="Setting" component={Setting} />
      </Tab.Navigator>
    </>
  );
};

export default Home;
