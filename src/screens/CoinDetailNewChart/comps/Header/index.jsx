import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useWishListContext } from "../../../../context/wishlist";

const Header = (props) => {
  const { coinId, small, symbol, market_cap_rank } = props;

  const { wishlistids, storeWishListData, removeStoredWishListData } =
    useWishListContext();

  const checkifWishlist = () => wishlistids.some((val) => val === coinId);

  console.log("check this:", checkifWishlist());

  const addToWishList = () => {
    if (checkifWishlist()) {
      console.log("it is true");
      return removeStoredWishListData(coinId);
    }
    console.log("it is false");
    return storeWishListData(coinId);
  };
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <Ionicons
        onPress={() => navigation.goBack()}
        name="chevron-back-sharp"
        size={24}
        color="white"
      />
      <View style={styles.tickerContainer}>
        <Image source={{ uri: small }} style={{ width: 30, height: 30 }} />
        <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
        <View
          style={{
            backgroundColor: "#585858",
            paddingHorizontal: 5,
            paddingVertical: 2,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            #{market_cap_rank}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => addToWishList()}>
        <AntDesign
          name={checkifWishlist() ? "star" : "staro"}
          size={24}
          color={checkifWishlist() ? "#ffbf00" : "white"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
