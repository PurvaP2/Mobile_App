import "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Button, Text, StyleSheet, Pressable, Alert, View } from "react-native";
import Screen from "./Screen";
import { s } from "../App.style";

export default function Home() {
  const nav = useNavigation();
  const handleNavigation = () => {
    Alert.alert("Navigating to another screen");
    nav.navigate(Screen, { name: "Screen", key: "screen" });
  };
  return (
    <View style={styles.box}>
      <Text style={s.text}>Hello! from Home page</Text>
      <Pressable style={styles.button} onPress={handleNavigation}>
        <Text style={styles.text}>Navigate</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    flex: 1,
    padding: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    marginHorizontal: 20,
    marginTop: 30,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
