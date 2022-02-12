import {
  View,
  Text,
  TextInput,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect,useCallback } from "react";
import Header from "./comps/Header";
import { AntDesign } from "@expo/vector-icons";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartYLabel,
} from "@rainbow-me/animated-charts";
import coindata from "../../../assets/data/crypto.json";
import styles from "./styles";
import { useRoute } from "@react-navigation/native";
import {
  getDetailedCoinData,
  getCoinMarketCap,
  getCandleChartData,
} from "../../services/requests";
import FilterDate from "./comps/FilterDate";
import { LineChart, CandlestickChart } from "react-native-wagmi-charts";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const filterDaysArray = [
  { filterText: "24h", filterDay: "1" },
  { filterText: "7d", filterDay: "7" },
  { filterText: "30d", filterDay: "30" },
  { filterText: "1y", filterDay: "365" },
  { filterText: "All", filterDay: "MAX" },
];
const CoinDetail = () => {
  const [coin, setCoin] = useState(null);
  const [coinMarketData, setCoinMarketData] = useState(null);
  const [coinCandleChartData, setCoinCandleChartData] = useState(null);
  const route = useRoute();

  const {
    params: { coinId },
  } = route;
  const [loading, setLoading] = useState(false);
  const [coinValue, setCoinValue] = useState("1");
  const [usdValue, setUsdValue] = useState("");
  const [selectedRange, setSelectedRange] = useState("1");
  const [isCandleChartVisible, setIsCandleChartVisible] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const data = await getDetailedCoinData(coinId);
    // const data1 = await getCoinMarketCap(coinId)
    setCoin(data);
    // setCoinMarketData(data1)
    setUsdValue(data.market_data.current_price.usd.toString());
    setLoading(false);
  };

  const fetchMarketCoinData = async (selectedRange) => {
    // setLoading(true)
    const data = await getCoinMarketCap(coinId, selectedRange);
    setCoinMarketData(data);
    // setLoading(false)
  };

  const fetchCandleStickChartData = async (selectedRange) => {
    const data = await getCandleChartData(coinId, selectedRange);
    setCoinCandleChartData(data);
  };

  useEffect(() => {
    fetchData();
    fetchMarketCoinData("1");
    fetchCandleStickChartData();
  }, []);

  const handleRangeChange = (selectedRange) => {
    setSelectedRange(selectedRange);
    fetchMarketCoinData(selectedRange);
    fetchCandleStickChartData(selectedRange);
  };

  const callHandleRangeChange = useCallback((range) => handleRangeChange(range), [selectedRange])

  if (loading || !coin || !coinMarketData || !coinCandleChartData) {
    return <ActivityIndicator size="large" />;
  }

  const {
    id,
    image: { small },
    symbol,
    name,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = coin;

  const { prices } = coinMarketData;

  const percentageColor =
    price_change_percentage_24h < 0 ? "#ea3943" : "#16c784" || "#ffffff";
  const chartValueColor =
    current_price.usd > prices[0][1] ? "#16c784" : "#ea3943";
  const screenWidth = Dimensions.get("window").width;

  const changeCoinValue = (value) => {
    setCoinValue(value);
    const floatValue = parseFloat(value.replace(",", ".")) || 0;
    setUsdValue((floatValue * current_price.usd).toString());
  };

  const changeUsdValue = (value) => {
    setUsdValue(value);
    const floatValue = parseFloat(value.replace(",", ".")) || 0;
    setCoinValue((floatValue / current_price.usd).toString());
  };
  const formatCurrency = ({ value }) => {
    "worklet";
    if (value === "") {
      if (current_price.usd < 1) {
        return `$ ${current_price.usd}`;
      }
      return `$${current_price.usd.toFixed(2)}`;
    }
    if (current_price.usd < 1) {
      return `$ ${parseFloat(value)}`;
    }
    return `$${parseFloat(value).toFixed(2)}`;
  };

  

  console.log(coinCandleChartData);

  return (
    <View style={{ paddingHorizontal: 10 }}>
      {/* <ChartPathProvider
        data={{
          points: prices.map((price) => ({ x: price[0], y: price[1] })),
          // data={{ points: prices.map(([x,y]) => ({x: x, y: y})),
          // smoothingStrategy: 'bezier'
        }}
      > */}
      <LineChart.Provider
        data={prices.map(([timestamp, value]) => ({ timestamp, value }))}
      >
        <Header
          coinId={id}
          symbol={symbol}
          image={small}
          market_cap_rank={market_cap_rank}
        />
        <View style={styles.priceContainer}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <LineChart.PriceText
              format={formatCurrency}
              style={styles.currentPrice}
            />
            {/* <ChartYLabel format={formatCurrency} style={styles.currentPrice} /> */}
            {/* <Text style={styles.currentPrice}>${current_price.usd}</Text> */}
          </View>
          <View
            style={{
              backgroundColor: percentageColor,
              paddingHorizontal: 5,
              paddingVertical: 6,
              borderRadius: 5,
              flexDirection: "row",
            }}
          >
            <AntDesign
              name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
              size={12}
              color={"white"}
              style={{ alignSelf: "center", marginRight: 5 }}
            />
            <Text style={styles.priceChange}>
              {price_change_percentage_24h?.toFixed(2)}%
            </Text>
          </View>
        </View>
        {/* to do design */}
        <View style={styles.datefilterContainer}>
          {filterDaysArray.map((day) => (
            <FilterDate
              key={day.filterDay}
              filterDay={day.filterDay}
              filterText={day.filterText}
              selectedRange={selectedRange}
              handleRangeChange={callHandleRangeChange}
            />
          ))}
          {isCandleChartVisible ? (
            <MaterialIcons name="show-chart" size={24} color="#16c784" onPress={()=> setIsCandleChartVisible(false)} />
          ) : (
            <MaterialCommunityIcons name="candle" size={24} color="#16c784" onPress={()=> setIsCandleChartVisible(true)} />
          )}

          {/* <FilterDate filterDay="1" filterText="24h" selectedRange={selectedRange} handleRangeChange={handleRangeChange} />
        <FilterDate filterDay="7" filterText="7d" selectedRange={selectedRange} handleRangeChange={handleRangeChange} />
        <FilterDate filterDay="30" filterText="30d" selectedRange={selectedRange} handleRangeChange={handleRangeChange} />
        <FilterDate filterDay="365" filterText="1y" selectedRange={selectedRange} handleRangeChange={handleRangeChange} />
        <FilterDate filterDay="max" filterText="All"selectedRange={selectedRange} handleRangeChange={handleRangeChange}  /> */}
        </View>
        {/* <View>
          <ChartPath
            strokeWidth={2}
            height={screenWidth / 2}
            stroke={chartValueColor}
            width={screenWidth}
          />
          <ChartDot style={{ backgroundColor: chartValueColor }} />
        </View> */}

        {isCandleChartVisible ? (
          <CandlestickChart.Provider
            data={coinCandleChartData.map(
              ([timestamp, open, high, low, close]) => ({
                timestamp,
                open,
                high,
                low,
                close,
              })
            )}
          >
            <CandlestickChart height={screenWidth / 2} width={screenWidth}>
              <CandlestickChart.Candles />
              <CandlestickChart.Crosshair>
                <CandlestickChart.Tooltip />
              </CandlestickChart.Crosshair>
            </CandlestickChart>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
              <View style={{flexDirection: "column"}}>
                <Text style={{color: 'grey', paddingRight: 5}}>Open</Text>
              <CandlestickChart.PriceText
                style={{ color: "white", fontWeight: "700" }}
                type="open"
              />
              </View>
              <View style={{flexDirection: "column"}}>
              <Text style={{color: 'grey', paddingRight: 5}}>High</Text>
              <CandlestickChart.PriceText
                style={{ color: "white", fontWeight: "700" }}
                type="high"
              />
              </View>
              <View style={{flexDirection: "column"}}>
              <Text style={{color: 'grey', paddingRight: 5}}>Low</Text>
              <CandlestickChart.PriceText
                style={{ color: "white", fontWeight: "700" }}
                type="low"
              />
              </View>
              <View style={{flexDirection: "column"}}>
              <Text style={{color: 'grey', paddingRight: 5}}>Close</Text>
              <CandlestickChart.PriceText
                style={{ color: "white", fontWeight: "700" }}
                type="close"
              />
              </View>
              
            </View>
            <View style={{flexDirection: "column", marginVertical: 10}}>
              <Text style={{color: 'grey', paddingRight: 5}}>Date</Text>
              <CandlestickChart.DatetimeText
                style={{ color: "white", fontWeight: "700" }}
                type="close"
              />
              </View>
          </CandlestickChart.Provider>
        ) : (
          <LineChart height={screenWidth / 2} width={screenWidth}>
            <LineChart.Path color={chartValueColor} />
            <LineChart.CursorCrosshair color={chartValueColor} />
            <LineChart.CursorLine />
          </LineChart>
        )}

        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Text style={{ color: "white", alignSelf: "center" }}>
              {symbol.toUpperCase()}
            </Text>
            <TextInput
              style={styles.input}
              value={coinValue}
              keyboardType="numeric"
              onChangeText={changeCoinValue}
            />
          </View>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Text style={{ color: "white", alignSelf: "center" }}>USD</Text>
            <TextInput
              style={styles.input}
              value={usdValue}
              keyboardType="numeric"
              onChangeText={changeUsdValue}
            />
          </View>
        </View>
        {/* </ChartPathProvider> */}
      </LineChart.Provider>
    </View>
  );
};

export default CoinDetail;
