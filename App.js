import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CoinDetail from "./src/screens/CoinDetail";

import CryptoList from "./src/screens/CrypoList";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CryptoList /> */}
      <CoinDetail />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
});
