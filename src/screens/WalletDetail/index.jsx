import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const WalletDetail = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Pressable onPress={()=> navigation.goBack()}>
        <Text style={{color: 'white'}}>Back</Text>
      </Pressable>
      <Text style={{color: 'white'}}>Wallet Coin Detail Transaction</Text>
    </View>
  );
};

export default WalletDetail;
