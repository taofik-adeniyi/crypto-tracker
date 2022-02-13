import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from 'react-native'
import React from 'react'
import { useThemeContext } from './src/context/theme'
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation";


const AppNavigationContainer = () => {
    const { theme } = useThemeContext()
    console.log('app nav container', theme.appBg);
  return (
    <NavigationContainer
      theme={{
        colors: { background: theme.appBg },
      }}
    >
        <View style={styles.container}>
          <Navigation />
          <StatusBar style="light" />
        </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#121212",
      paddingTop: 50,
    },
  });

export default AppNavigationContainer