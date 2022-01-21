import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Header from "./comps/Header";
import { AntDesign } from "@expo/vector-icons";
import {ChartDot, ChartPath, ChartPathProvider} from '@rainbow-me/animated-charts'
import coindata from "../../../assets/data/crypto.json";
import styles from "./styles";

const CoinDetail = () => {
    const {
        image: { small },
        symbol,
        prices,
        name,
        market_data: {
            market_cap_rank,
            current_price,
            price_change_percentage_24h,
        },
    } = coindata;
    
    const percentageColor = price_change_percentage_24h < 0 ? '#ea3943' : '#16c784';
    const screenWidth = Dimensions.get("window").width;

  return (
    <View style={{ paddingHorizontal: 10 }}>
    <ChartPathProvider 
        data={{ 
            points: prices.map(price => ({x: price[0], y: price[1]})), 
            // data={{ points: prices.map(([x,y]) => ({x: x, y: y})), 
            smoothingStrategy: 'bezier' 
        }}>

      <Header symbol={symbol} image={small} market_cap_rank={market_cap_rank} />
      <View style={styles.priceContainer}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.currentPrice}>${current_price.usd}</Text>
        </View>
        <View style={{backgroundColor: percentageColor, paddingHorizontal:5, paddingVertical: 6, borderRadius: 5, flexDirection: "row"}}>
        <AntDesign
            name={price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'}
            size={12}
            color={'white'}
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text style={styles.priceChange}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
      <View>
      <ChartPath height={screenWidth / 2} stroke="yellow" width={screenWidth} />
      <ChartDot style={{ backgroundColor: 'blue' }} />
      </View>
    </ChartPathProvider>
    </View>
  );
};

export default CoinDetail;
