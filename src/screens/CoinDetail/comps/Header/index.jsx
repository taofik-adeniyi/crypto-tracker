import { View, Text, Image } from 'react-native';
import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { styles } from './styles'

const Header = (props) => {
  const {
    small,
    symbol,
    market_cap_rank
  } = props;
   
  return (
    <View style={styles.headerContainer}>
      <Ionicons name="chevron-back-sharp" size={24} color="white" />
      <View style={styles.tickerContainer}>
        <Image source={{ uri: small }} style={{ width: 30, height: 30 }} />
        <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
        <View style={{backgroundColor: '#585858', paddingHorizontal: 5, paddingVertical: 2, borderRadius: 5}}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>#{market_cap_rank}</Text>

        </View>
      </View>
      <EvilIcons name="user" size={35} color="white" />
    </View>
  );
};

export default Header;
