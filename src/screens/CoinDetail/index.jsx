import { View, Text, TextInput, Dimensions } from "react-native";
import React, { useState } from "react";
import Header from "./comps/Header";
import { AntDesign } from "@expo/vector-icons";
import {ChartDot, ChartPath, ChartPathProvider, ChartYLabel} from '@rainbow-me/animated-charts'
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

    const [coinValue, setCoinValue] = useState(1)
    const [usdValue, setUsdValue] = useState(current_price.usd)

    const changeCoinValue = (value) => {
        setCoinValue(value)
        const floatValue = parseFloat(value.replace(',' , '.')) || 0
        setUsdValue((floatValue * current_price.usd).toString())
    }

    const changeUsdValue = (value) => {
        setUsdValue(value)
        const floatValue = parseFloat(value.replace(',' , '.')) || 0
        setCoinValue((floatValue / current_price.usd).toString())
    }
    
    const percentageColor = price_change_percentage_24h < 0 ? '#ea3943' : '#16c784';

    const chartValueColor = current_price.usd > prices[0][1] ? '#16c784' : '#ea3943'

    const screenWidth = Dimensions.get("window").width;

    const formatCurrency = (value) => {
        "worklet";
        if(value === ""){
            return `$${current_price.usd.toFixed(2)}`
        }
        return `$${parseFloat(value).toFixed(2)}`
    }

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
          <ChartYLabel
            format={formatCurrency}
            style={styles.currentPrice} 
          />
          {/* <Text style={styles.currentPrice}>${current_price.usd}</Text> */}
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
      {/* to do design */}
      {/* <View></View> */}
      <View>
      <ChartPath 
      strokeWidth={2} 
      height={screenWidth / 2} 
      stroke={chartValueColor} 
      width={screenWidth} />
      <ChartDot style={{ backgroundColor: chartValueColor }} />
      </View>
      <View style={{flexDirection: "row"}}>
          <View style={{flexDirection: "row", flex: 1}}>
              <Text style={{color: 'white', alignSelf: 'center'}}>{symbol.toUpperCase()}</Text>
              <TextInput 
              style={styles.input} 
              value={coinValue} 
              keyboardType="numeric" 
              onChangeText={changeCoinValue} />
          </View>
          <View style={{flexDirection: "row", flex: 1}}>
              <Text style={{color: 'white', alignSelf: 'center'}}>USD</Text>
              <TextInput style={styles.input} 
              value={usdValue}
              keyboardType="numeric"
              onChangeText={changeUsdValue} 
              />
          </View>
      </View>
    </ChartPathProvider>
    </View>
  );
};

export default CoinDetail;
