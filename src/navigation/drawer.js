import { View, Text, Button } from "react-native";
import React from "react";
import Profile from "../screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Home from "../screens/Home";

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
    console.log(props, 'drawer');
  return (
    <DrawerContentScrollView {...props} style={{backgroundColor: 'gray'}}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
      <View><Text style={{color: 'white'}}>What is going on</Text></View>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    // <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{headerShown: false}}
      >
        <Drawer.Screen name="Profile" component={Home} />
        <Drawer.Screen name="Notifications" component={Notifications} />
      </Drawer.Navigator>
    // </NavigationContainer>
  );
};

export default MyDrawer;
