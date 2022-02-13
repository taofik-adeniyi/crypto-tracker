import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import WishList from "../screens/WishList";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Wallet from "../screens/Wallet";
import Market from "../screens/Market";

const Tab = createBottomTabNavigator();

const Bottom = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "#181818",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
            headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Entypo name="home" size={focused ? 28 : 24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
            title: 'Market',
            headerStyle: {
                backgroundColor: '#121212',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
            

          tabBarIcon: ({ focused, size, color }) => (
            <Fontisto
              name="wallet"
              size={24}
              size={focused ? 28 : 24}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="WishList"
        component={WishList}
        options={{
            headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name="folder-open-sharp"
              size={focused ? 28 : 24}
              color={color}
            />
          ),
        }}
      />
      
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
            headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialIcons
              name="store-mall-directory"
              size={24}
              size={focused ? 28 : 24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Bottom;
