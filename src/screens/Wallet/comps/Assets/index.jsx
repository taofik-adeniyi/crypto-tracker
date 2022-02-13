import { View, Text, FlatList, Pressable, Image } from "react-native";
import React from "react";
import { styles } from "./styles";

const Coin = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row"}}>
      <Image source={{uri: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579"}} style={{width: 30, height: 30}} />
      <View>
        <Text style={styles.ticker}>DOGE</Text>
        <Text style={styles.name}>Dogecoin</Text>
      </View>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <Text style={{color: 'white'}}>356.1787</Text>
        <Text style={{color: 'white'}}>$48.92</Text>
      </View>
    </View>
  );
};

export default Coin;
