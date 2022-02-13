import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  RefreshControl,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native";
import CoinItem from "../../comps/CoinItem";
import cryptodata from "../../../assets/data/cryptocurrencies.json";
import { getMarketData } from "../../services/requests";
import TopCoins from "./comps/TopCoins";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
import { fonts } from "../../utils/constants";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { useIntroSlider } from "../../context/introslider";
import { useThemeContext } from "../../context/theme";

const Home = (props) => {
  const { showAppIntro } = useIntroSlider()
  const navigation = useNavigation()
  const { theme } = useThemeContext()
  console.log('the theme is >>>', theme);
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(null);

  const fetchCoins = async (pageNumber) => {
    if (loading) return;
    setLoading(true);
    const data = await getMarketData(pageNumber);
    // console.log("coingecko", data);
    // setCoins((prevState) => [...prevState, ...data]);
    setCoins(data);
    setLoading(false);
  };

  const refetchCoins = async () => {
    if (loading) return;
    setLoading(true);
    const data = await getMarketData();
    setCoins(data);
    setLoading(false);
  };

  const listEndHandler = () => {
    // console.log("end reached");
    fetchCoins(coins.length / 50 + 1);
    // console.log(coins.length);
  };

  useEffect(() => {
    fetchCoins();
    // const fetch = async () => {
    //   try {
    //     const res = await axios.get(`http://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h`)
    //   console.log('the res', res);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // fetch()
  }, []);

  
  return (
    <>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: "white",
          height: 350,
          padding: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <View>
            <Text
              style={{
                color: theme.color,
                fontSize: 15,
                fontWeight: "600",
                fontFamily: fonts.Merriweather_900Black_Italic,
              }}
            >
              Welcome to Vox, Taofik ..
            </Text>
            <Text
              style={{
                color: "gray",
                fontSize: 12,
                paddingTop: 5,
                fontFamily: fonts.DroidSans,
              }}
            >
              Powered by Coingecko
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          >
            <MaterialCommunityIcons
              name="account-arrow-left-outline"
              size={26}
              color="white"
            />
          </TouchableOpacity>
        </View>

        <TopCoins title="My favorites" />

        <TopCoins title="top coins" />

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "gray" }}>Flash news?.. </Text>
        </View>
      </View>
      <View style={{ paddingTop: 5 }}>
        <FlatList
          data={coins}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => <CoinItem coins={item} />}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              tintColor="#fff"
              onRefresh={refetchCoins}
            />
          }
          onEndReached={() => listEndHandler()}
        />
      </View>
    </>
  );
};

export default Home;
