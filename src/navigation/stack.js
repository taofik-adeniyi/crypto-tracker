import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CoinDetailNewChart from '../screens/CoinDetailNewChart';
import WalletDetail from '../screens/WalletDetail';
import Settings from '../screens/Settings';

const Stack = createNativeStackNavigator()

const StacksNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="CoinDetail" component={CoinDetail} /> */}
        {/* <Stack.Screen name="CoinDetail" component={CoinDetailNewChart} /> */}
        {/* <Stack.Screen name="WalletDetail" component={WalletDetail} /> */}
        <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  )
}

export default StacksNavigator