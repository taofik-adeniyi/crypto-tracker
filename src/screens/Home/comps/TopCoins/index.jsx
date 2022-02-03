import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { styles } from "./styles";

const data = [
  {
    id: 1,
    name: "bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
  },
  {
    id: 2,
    name: "ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
  },
  {
    id: 3,
    name: "binance",
    image:
      "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615",
  },
  {
    id: 4,
    name: "thether",
    image:
      "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707",
  },
];
const TopCoins = (props) => {
  const { title } = props
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View>
            <Text style={{ color: "white" }}>More Options</Text>
          </View>
        </View>
      <View style={{ flexDirection: "column", marginVertical: 15 }}>
        <FlatList
        // columnWrapperStyle={{justifyContent: "center"}}
        horizontal
          data={data}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Image
                style={{ width: 30, height: 30 }}
                source={{
                  uri: item.image,
                }}
              />
              <Text style={styles.name}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default TopCoins;
