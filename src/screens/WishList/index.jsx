import {
  View,
  Text,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  Pressable,
  TouchableHighlight
} from "react-native";
import React, { useEffect, useState } from "react";
import CoinItem from "../../comps/CoinItem";
import { useWishListContext } from "../../context/wishlist";
import { getWishListCoins } from "../../services/requests";
import { SwipeListView } from "react-native-swipe-list-view";
import { Ionicons } from "@expo/vector-icons";

const WishList = () => {
  const { wishlistids } = useWishListContext();
  console.log(wishlistids);
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const transformer = () => wishlistids.join("%2C");
  console.log("the >>>>>>>", transformer(), "<<<<<<");
  const fetchWishListCoins = async () => {
    if (loading) return;
    setLoading(true);
    const data = await getWishListCoins(1, transformer());
    // setCoins(prevState => [...prevState, ...data])
    setCoins(data);
    setLoading(false);
  };

  const refetchWishListCoins = async () => {
    if (loading) return;
    setLoading(true);
    const data = await getWishListCoins(1, transformer());
    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    if (wishlistids.length > 0) {
      fetchWishListCoins();
    }
  }, [wishlistids]);

  // const onSwipeValueChange = swipeData => {
  //   const { key, value } = swipeData;
  //   rowSwipeAnimatedValues[key].setValue(Math.abs(value));
  // };

  const renderButton = (data) => {
    return (
      <Pressable
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-end",
          backgroundColor: "#EA3943",
          paddingRight: 20,
          marginLeft: 20
        }}
        onPress = { () => console.warn(data)}
        underlayColor={'#AAA'}
      >
        <Ionicons name="ios-trash-bin" size={24} color="white" />
      </Pressable>
    );
  };
  return (
    <>
      <View>
        <Text style={{ color: "white" }}>Hi wishlist</Text>
      </View>

      <SwipeListView
        data={coins}
        renderItem={({ item }) => <CoinItem coins={item} />}
        rightOpenValue={-65}
        disableRightSwipe
        closeOnRowPress
        keyExtractor={({id}, index) => `${id}${index}`}
        renderHiddenItem={(data, rowMap) => renderButton(data)}
        // refreshControl={
        //   <RefreshControl
        //     refreshing={loading}
        //     tintColor={"#ffffff"}
        //     onRefresh={fetchWishListCoins}
        //   />
        // }
        // leftOpenValue={75}
        // onSwipeValueChange={onSwipeValueChange}
        // ListHeaderComponent={}
      />
    </>
  );
};

export default WishList;
