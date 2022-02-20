import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import CoinDetail from "../screens/CoinDetail";
import CoinDetailNewChart from "../screens/CoinDetailNewChart";
import BottomNavigator from "./bottom";
import WalletDetail from "../screens/WalletDetail";
import Settings from "../screens/Settings";
import DrawerNavigator from "./drawer";
import Profile from "../screens/Profile";
import IntroSlider from "../screens/IntroSlider";
import Register from "../screens/Register";
import Login from "../screens/Login";
import StacksNavigator from "./stack";
import { useIntroSlider } from "../context/introslider";
import { useAuthContext } from "../context/auth";
import Welcome from "../screens/Welcome";

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const IntroStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Register" component={Register} />
      <HomeStack.Screen name="Login" component={Login} />
      <HomeStack.Screen name="Home" component={DrawerNavigator} />
    </HomeStack.Navigator>
  );
}

const New = () => {
  return (
    <View>
      <Text style={{color: 'white'}}>Hello News</Text>
    </View>
  )
}

function IntroSliderStackScreen() {
  const { isLoggedIn, user } = useAuthContext();
  const { showAppIntro } = useIntroSlider();
  console.log('what is showAppIntro', showAppIntro === 'TRUE' ? 'write true' : 'write false');
  return (
    <IntroStack.Navigator screenOptions={{headerShown: false}}>
      {showAppIntro === 'TRUE' ? <IntroStack.Screen name="IntroSlider" component={IntroSlider} /> : null}
      
      {/* <IntroStack.Screen name="HomeStackScreen" component={HomeStackScreen} /> */}
     
      <IntroStack.Group>
        <IntroStack.Screen name="Welcome" component={Welcome} />
        <IntroStack.Screen name="Register" component={Register} />
        <IntroStack.Screen name="Login" component={Login} />
      </IntroStack.Group>
      

      <IntroStack.Screen name="Home" component={DrawerNavigator} />
    </IntroStack.Navigator>
  )
}

const Navigation = () => {
  const { showAppIntro } = useIntroSlider();
  const { isLoggedIn, user } = useAuthContext();
  // console.log('wetin be auth 000000', auth, 'app intro', showAppIntro);
  return (
    <Stack.Navigator
      initRouteName="Intro"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Intro" component={IntroSliderStackScreen} />
      {/* {showAppIntro === "true" ? (
          <Stack.Screen name="IntroSlider" component={IntroSlider} />
      ) : null} */}
      
      {/* <Stack.Screen name="HomeStackScreen" component={HomeStackScreen} /> */}
        
      {/* <Stack.Group> */}
        
        {/* {
          isLoggedIn ? <>
          <Stack.Screen name="HomeStackScreen" component={HomeStackScreen} />
          <Stack.Screen name="Home" component={Login} />
          </> : null
        } */}
        
        {/* <Stack.Screen name="Home" component={DrawerNavigator} /> */}
        {/* <Stack.Screen name="CoinDetail" component={CoinDetailNewChart} /> */}
        {/* <Stack.Screen name="WalletDetail" component={WalletDetail} /> */}
      {/* </Stack.Group> */}

      {/* <Stack.Screen name="CoinDetail" component={CoinDetailNewChart} /> */}

      {/* <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
      {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="Invite" component={Invite} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
};

export default Navigation;
