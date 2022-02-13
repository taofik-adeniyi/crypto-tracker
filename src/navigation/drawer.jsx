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



function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={{backgroundColor: 'gray'}}>
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
        />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
        />
    </DrawerContentScrollView>
  );
}

const Stack = createNativeStackNavigator();

const MyBottomStack = ({navigation}) => {
  return <Stack.Navigator>
    <Stack.Screen options={{headerShown: false}} name="Bottom" component={BottomNavigator} />
  </Stack.Navigator>
}
const MyCoinDetailNewChart = ({navigation}) => {
  return <Stack.Navigator>
    <Stack.Screen name="CoinDetail" component={CoinDetailNewChart} />
  </Stack.Navigator>
}
const MyWalletDetail = ({navigation}) => {
  return <Stack.Navigator>
    <Stack.Screen name="WalletDetail" component={WalletDetail} />
  </Stack.Navigator>
}
const Drawer = createDrawerNavigator();

const MyView = () => {
  const route = useRoute()
  console.log(route.params.coinId, 'the route of my view');
  return (
    <View>
      <Text style={{color: 'red'}}>Text</Text>
    </View>
  )
}
const DrawerNavigator = () => {
  return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{headerShown: false}}
      >
        <Drawer.Screen name="Bottom" component={MyBottomStack} />
        <Drawer.Screen name="CoinDetail" component={CoinDetailNewChart} />
        <Drawer.Screen name="WalletDetail" component={MyWalletDetail} />
      </Drawer.Navigator>
  );
};

export default DrawerNavigator;
