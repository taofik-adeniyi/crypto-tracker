// import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation";
import WishList from "./src/context/wishlist";
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { 
  Merriweather_300Light,
  Merriweather_300Light_Italic,
  Merriweather_400Regular,
  Merriweather_400Regular_Italic,
  Merriweather_700Bold,
  Merriweather_700Bold_Italic,
  Merriweather_900Black,
  Merriweather_900Black_Italic 
} from '@expo-google-fonts/merriweather';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Merriweather_300Light,
    Merriweather_300Light_Italic,
    Merriweather_400Regular,
    Merriweather_400Regular_Italic,
    Merriweather_700Bold,
    Merriweather_700Bold_Italic,
    Merriweather_900Black,
    Merriweather_900Black_Italic,
    DroidSans: require('./assets/fonts/DroidSans.ttf') 
  });
  if(!fontsLoaded){
    return <ActivityIndicator size="large" />
  }
  return (
    <NavigationContainer
      theme={{
        colors: { background: "#121212" },
      }}
    >
      <WishList>
        <View style={styles.container}>
          <Navigation />
          <StatusBar style="light" />
        </View>
      </WishList>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
});
