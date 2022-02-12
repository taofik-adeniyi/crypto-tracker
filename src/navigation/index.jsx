import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import CoinDetail from '../screens/CoinDetail';
import Bottom from './bottom';
import WalletDetail from '../screens/WalletDetail';
import Settings from '../screens/Settings';
import MyDrawer from './drawer'
import Profile from '../screens/Profile';


const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();
const Navigation = () => {

  return (
    <Stack.Navigator initRouteName="Root" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Root" component={Bottom} />
        <Stack.Screen name="CoinDetail" component={CoinDetail} />
        <Stack.Screen name="WalletDetail" component={WalletDetail} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="ProfileDrawer" component={MyDrawer} />
        {/* <Drawer.Navigator>
          <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator> */}
    </Stack.Navigator>
  );
};

export default Navigation;
