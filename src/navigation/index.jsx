import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import CoinDetail from "../screens/CoinDetail";
import CoinDetailNewChart from "../screens/CoinDetailNewChart";
import BottomNavigator from "./bottom";
import WalletDetail from "../screens/WalletDetail";
import Settings from "../screens/Settings";
import DrawerNavigator from "./drawer";
import Profile from "../screens/Profile";
import IntroSlider from "../screens/IntroSlider";
import StacksNavigator from "./stack";
import { useIntroSlider } from "../context/introslider";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Navigation = () => {
  const { showAppIntro } = useIntroSlider();
  return (
    <Stack.Navigator
      initRouteName="IntroSlider"
      screenOptions={{ headerShown: false }}
    >
      {showAppIntro === "true" ? (
        <Stack.Group>
          <Stack.Screen name="IntroSlider" component={IntroSlider} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="Bottom" component={BottomNavigator} />
          <Stack.Screen name="CoinDetail" component={CoinDetailNewChart} />
          <Stack.Screen name="WalletDetail" component={WalletDetail} />
        </Stack.Group>
      )}

      {/* <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
      {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="Invite" component={Invite} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
};

export default Navigation;
