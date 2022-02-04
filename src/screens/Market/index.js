import { View, Text } from 'react-native';
import React from 'react';
import {styles} from './styles'
import SearchableDropdown from 'react-native-searchable-dropdown'

const Market = () => {
  return (
    <View>
      <Text style={{color: 'white'}}>Market</Text>
      <SearchableDropdown
        containerStyle={{
            width:"100%",
        paddingHorizontal:10,
        paddingVertical:20
        }}
        itemStyle={{
            padding: 10,
            marginTop: 2,
            backgroundColor: '#1e1e1e',
            borderWidth: 1,
            borderColor: '#444444',
            borderRadius: 5,
        }}
        itemTextStyle={{
            color: '#fff'
        }}
        items={[]}
        onItemSelect={(item)=>console.log('item selected', item)}
        resetValue={false}
        placeholder={"Select a coin"}
        placeholderTextColor="#ffffff"
        textInputProps={{
            underlineColorAndroid: 'transparent',
            style: {
                padding: 12,
                borderWidth: 1.5,
                borderColor: '#444444',
                borderRadius: 5,
                backgroundColor: '#1e1e1e',
                color: '#ffffff'
            }
        }}
      />
    </View>
  );
};

export default Market;
