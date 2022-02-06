import { View, Text, Button, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import SearchableDropdown from "react-native-searchable-dropdown";
import { getAllCoins, getDetailedCoinData } from "../../services/requests";

const Market = () => {
  const [allCoins, setAllCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState({});
  const [selectedCoinInfo, setSelectedCoinInfo] = useState({});

  const fetchAllCoins = async () => {
    if (loading) return;
    setLoading(true);
    const allcoins = await getAllCoins();
    setAllCoins(allcoins);
    setLoading(false);
  };

  const fetchCoinInfo = async () => {
    if (loading) return;
    setLoading(true);
    const coinInfo = (await getDetailedCoinData(selectedCoin.id)) || {};
    setSelectedCoinInfo(coinInfo);
    setLoading(false);
  };
  useEffect(() => {
    fetchAllCoins();
    return () => setAllCoins([]);
  }, []);

  useEffect(() => {
    fetchCoinInfo();
  }, [selectedCoin]);

  //   console.log(selectedCoinInfo);

  const { symbol, name, image, description, market_data } = selectedCoinInfo;
  //   console.log(market_data.current_price.usd);

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <Text style={{ color: "white" }}>{loading ? "..loading" : "Market"}</Text>
      <SearchableDropdown
        containerStyle={{
          width: "100%",
          //   paddingHorizontal: 10,
          paddingVertical: 10,
        }}
        itemStyle={{
          padding: 10,
          marginTop: 2,
          backgroundColor: "#1e1e1e",
          borderWidth: 1,
          borderColor: "#444444",
          borderRadius: 5,
        }}
        itemTextStyle={{
          color: "#fff",
        }}
        items={allCoins}
        onItemSelect={setSelectedCoin}
        resetValue={false}
        placeholder={selectedCoin?.id || "Select a coin"}
        placeholderTextColor="#ffffff"
        textInputProps={{
          underlineColorAndroid: "transparent",
          style: {
            padding: 12,
            borderWidth: 1.5,
            borderColor: "#444444",
            borderRadius: 5,
            backgroundColor: "#1e1e1e",
            color: "#ffffff",
          },
        }}
      />
      {selectedCoin?.id ? (
        <View style={{ borderWidth: 1, height: 300, backgroundColor: "gray" }}>
          <View>
            <View>
              <Text style={{ color: "#fff" }}>{selectedCoin.id}</Text>
              <Text>{image?.small}</Text>
              <Text>{description?.en.slice(0, 200)}</Text>
              <Text>{symbol.toUpperCase()}</Text>
              <Text>$ {market_data.current_price.usd}</Text>
              <Image
                source={{ uri: image?.small }}
                style={{ borderRadius: 50, width: 30, height: 30 }}
              />
            </View>
            <View>
              <Text style={{ color: "#fff" }}>{symbol}</Text>
            </View>
            <View>
              <Text style={{ color: "#fff" }}>{name}</Text>
            </View>
          </View>
        </View>
      ) : null}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{
            marginVertical: 20,
            backgroundColor: "grey",
            width: "45%",
            borderRadius: 10,
          }}
        >
          <Button
            color="#fff"
            title="buy"
            onPress={() => console.warn("buying")}
          />
        </View>
        <View
          style={{
            marginVertical: 20,
            backgroundColor: "#202120",
            width: "45%",
            borderRadius: 10,
          }}
        >
          <Button
            color="#fff"
            title="sell"
            onPress={() => console.warn("selling")}
          />
        </View>
      </View>
      <View>
        <Text style={{ color: "#fff" }}>similar coins to buy</Text>
      </View>
    </View>
  );
};

export default Market;
