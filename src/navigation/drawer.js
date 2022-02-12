import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Profile">
    <Drawer.Screen name="Profile" component={Profile} />
  </Drawer.Navigator>
  )
}

export default MyDrawer