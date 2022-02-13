import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

const Coin = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.container} onPress={ () => navigation.navigate('WalletDetail')}>
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
    </TouchableOpacity>
  );
};

export default Coin;
