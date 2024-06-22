import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "@/Pages/Home";
import About from "@/Pages/About";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "whitesmoke" },
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: () => <Ionicons name="home" size={20} />,
        }}
        name="Home"
        component={Home}
      ></Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: () => <Ionicons name="information" size={25} />,
        }}
        name="About"
        component={About}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
