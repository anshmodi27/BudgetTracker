import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { theme } from "./theme";
import Categories from "./Screens/Categories";
import Home from "./Screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: theme.colors.background,
            },
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{
            headerStyle: {
              backgroundColor: theme.colors.background,
            },
          }}
        />
      </Stack.Navigator>

      <StatusBar style="dark" />
    </NavigationContainer>
  );
}
