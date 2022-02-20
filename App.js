// import 'react-native-gesture-handler';
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useEffect } from "react"
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
import IntroSlider from "./src/context/introslider";
import Auth from "./src/context/auth";
import Theme from "./src/context/theme";
import AppNavigationContainer from "./AppNavigationContainer";
import Amplify, { Auth as AwsAuth } from 'aws-amplify'
import awsconfig from './src/aws-exports'


Amplify.configure(awsconfig)


 const App = () => {
  // AwsAuth.signOut()
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
    <Theme>
      <IntroSlider>
      <WishList>
        <AppNavigationContainer />
      </WishList>
    </IntroSlider>
    </Theme>
  );
}

export default App

