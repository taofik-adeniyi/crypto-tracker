import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import WishList from '../screens/WishList';
import { Entypo } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Bottom = () => {
  return (
      <Tab.Navigator initialRouteName="Home" screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: 'grey',
          tabBarStyle: {
              backgroundColor: '#181818'
          }
          }}>
          <Tab.Screen name="Home" component={Home} options={{
              tabBarIcon: ({focused, size, color})=> (<Entypo name="home" size={focused ? 28 : 24} color={color} />)
          }} />
          <Tab.Screen name="WishList" component={WishList} options={{
              tabBarIcon: ({focused, size, color})=> (<Ionicons name="folder-open-sharp" size={focused ? 28 : 24} color={color} />)
              
          }} />
      </Tab.Navigator>
  );
};

export default Bottom;
