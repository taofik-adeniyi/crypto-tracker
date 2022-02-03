import { View, Text, FlatList, RefreshControl } from 'react-native';
import React, { useEffect, useState} from 'react';
import CoinItem from '../../comps/CoinItem'
import { useWishListContext } from '../../context/wishlist'
import { getWishListCoins } from '../../services/requests';

const WishList = () => {
  const { wishlistids } = useWishListContext()
  console.log(wishlistids);
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(false)

  const transformer = () => wishlistids.join('%2C')
  console.log('the >>>>>>>', transformer(), '<<<<<<');
  const fetchWishListCoins = async () => {
    if(loading) return
    setLoading(true)
    const data = await getWishListCoins(1, transformer())
    // setCoins(prevState => [...prevState, ...data])
    setCoins(data)
    setLoading(false)
  }

  const refetchWishListCoins = async () => {
    if(loading) return
    setLoading(true)
    const data = await getWishListCoins(1, transformer())
    setCoins(data)
    setLoading(false)
  }
  
  useEffect(() => {
    fetchWishListCoins()
  }, [wishlistids])

  return (
    <>
    <View>
      <Text style={{color: 'white'}}>Hi wishlist</Text>
    </View>
  
    <FlatList
    data={coins}
    keyExtractor={(item, index) => index}
    renderItem={({ item }) => (
      <CoinItem coins={item} />
    )}
    refreshControl={<RefreshControl refreshing={loading} tintColor={'#ffffff'} onRefresh={fetchWishListCoins} />}
    
    />
    </>
  );
};

export default WishList;
