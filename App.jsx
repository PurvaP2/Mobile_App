import { Image, ImageBackground, Text } from "react-native";
import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Navigator from "./Navigation/Index";
import backgroundImg from "./assets/images/background.png";

export default function App() {
  return (
    <>
      <ImageBackground
        imageStyle={s.img}
        source={backgroundImg}
        style={s.backgroundImg}
      >
        <SafeAreaProvider>
          <SafeAreaView style={s.container}>
            <Navigator />
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </>
  );
}
