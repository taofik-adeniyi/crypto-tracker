import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CoinItem = ({ coins }) => {
  // console.log(coins);
  const {
    id,
    name,
    current_price,
    market_cap_rank,
    price_change_percentage_24h,
    symbol,
    market_cap,
    image
  } = coins;

  const percentageColor = price_change_percentage_24h < 0 ? '#ea3943' : '#16c784' || '#ffffff'

  const normalizeMarketCap = (market_cap) => {
    if(market_cap > 1e12){
        return `${(market_cap / 1e12).toFixed(3)} T`
    } if(market_cap > 1e9) {
        return `${(market_cap / 1e9).toFixed(3)} B`
    } if(market_cap > 1e6) {
        return `${(market_cap / 1e6).toFixed(3)} M`
    }if(market_cap > 1e3) {
        return `${(market_cap / 1e3).toFixed(3)} K`
    }
    return market_cap
  }

  const navigation = useNavigation()

  const handleNavigate = () => {
    console.log('pressed');
    navigation.navigate('CoinDetail', {coinId: id})
  }

  return (
    <TouchableOpacity onPress={handleNavigate} style={styles.coinContainer}>
      <Image
        style={{
          height: 20,
          width: 20,
          marginRight: 10,
          alignSelf: "center",
        }}
        source={{
          uri: image,
        }}
      />
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>{market_cap_rank}</Text>
          </View>
          <Text style={styles.text}>{symbol.toUpperCase()}</Text>
          <AntDesign
            name={price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'}
            size={14}
            color={percentageColor}
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text style={{color: percentageColor}}>{price_change_percentage_24h?.toFixed(2)}%</Text>
        </View>
      </View>
      <View style={{ marginLeft: "auto", alignItems: 'flex-end' }}>
        <Text style={styles.title}>{current_price.toFixed(2)}</Text>
        <Text style={{color: "white"}}>MCap {normalizeMarketCap(market_cap)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 3,
  },
  rank: {
    fontWeight: "bold",
    color: "white",
  },
  rankContainer: {
    marginRight: 5,
    backgroundColor: "#585858",
    borderRadius: 5,
    paddingHorizontal: 5,
    alignSelf: "center",
  },
  text: {
    color: "white",
    marginRight: 5,
    paddingHorizontal: 7,
    paddingVertical: 2,
  },
  coinContainer: {
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    // borderBottomWidth: 0.3,
    borderBottomColor: "#282828",
    padding: 15,
    backgroundColor: '#121212'
  },
});

export default CoinItem;
