import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import BottomNavigator from "./bottom";
import CoinDetailNewChart from "../screens/CoinDetailNewChart";
import WalletDetail from "../screens/WalletDetail";
import DrawerScreen from "../container/DrawerScreen";



function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={{backgroundColor: 'gray', flex: 1}}>
      {/* <DrawerItemList {...props} /> */}
      {/* <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
        />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
        /> */}
        <DrawerScreen />
    </DrawerContentScrollView>
  );
}

const Stack = createNativeStackNavigator();

const MyBottomStack = ({navigation}) => {
  return <Stack.Navigator>
    <Stack.Screen options={{headerShown: false}} name="Bottom" component={BottomNavigator} />
  </Stack.Navigator>
}

const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
  return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{headerShown: false}}
        initialRouteName="Bottom"
      >
        <Drawer.Screen name="Bottom" component={BottomNavigator} />
        <Drawer.Screen name="CoinDetail" component={CoinDetailNewChart} />
        <Drawer.Screen name="WalletDetail" component={WalletDetail} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
  );
};

export default DrawerNavigator;
