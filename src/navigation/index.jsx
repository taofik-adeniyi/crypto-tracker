import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import CoinDetail from '../screens/CoinDetail';
import Bottom from './bottom';
import WalletDetail from '../screens/WalletDetail';

const Stack = createNativeStackNavigator()
const Navigation = () => {

  return (
    <Stack.Navigator initRouteName="Root" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Root" component={Bottom} />
        <Stack.Screen name="CoinDetail" component={CoinDetail} />
        <Stack.Screen name="WalletDetail" component={WalletDetail} />
    </Stack.Navigator>
  );
};

export default Navigation;
