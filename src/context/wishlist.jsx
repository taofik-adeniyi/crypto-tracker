import { View, Text } from "react-native";
import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const WishListContext = createContext();

export const useWishListContext = () => useContext(WishListContext);

const WishList = ({ children }) => {
  const [wishlistids, setWishlistids] = useState([]);

  const getWishListData = async () => {
    try {
      const val = await AsyncStorage.getItem("@wishlistcoins");
      setWishlistids(val != null ? JSON.parse(val) : []);
    } catch (e) {
      console.log(e);
    }
  };

  const storeWishListData = async (coinId) => {
    try {
      const newwishlistid = [...wishlistids, coinId];
      const wishString = JSON.stringify(newwishlistid);
      await AsyncStorage.setItem("@wishlistcoins", wishString);
      setWishlistids(newwishlistid)
    } catch (e) {
        console.log(e);
    }
  };

  const removeStoredWishListData = async (coinId) => {
    try {
      const newids = wishlistids.filter((val) => val !== coinId);
      const listString = JSON.stringify(newids);
      await AsyncStorage.setItem("@wishlistcoins", listString);
      setWishlistids(newids)
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getWishListData();
  }, []);

  const ctxValue = {
    getWishListData,
    storeWishListData,
    removeStoredWishListData,
    wishlistids,
  };

  return (
    <WishListContext.Provider value={ctxValue}>
      {children}
    </WishListContext.Provider>
  );
};

export default WishList;
