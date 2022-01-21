import { View, Text } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native';
import CoinItem from "../../comps/CoinItem";
import cryptodata from "../../../assets/data/cryptocurrencies.json";

const CryptoList = () => {
  return (
    <FlatList
        data={cryptodata}
        renderItem={({ item }) => <CoinItem coins={item} />}
      />
  );
};

export default CryptoList;
