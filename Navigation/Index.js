import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Screen from "../Pages/Screen";
import TabNavigator from "./TabNavigator";

export default function Navigator() {
  const Stack = createStackNavigator();

  const navTheme = {
    colors: {
      background: "transparent",
    },
  };

  return (
    <NavigationContainer independent={true} theme={navTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Navigator" component={TabNavigator} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Screen" component={Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
