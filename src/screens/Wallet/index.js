import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";
import Coin from "./comps/Assets"

const Wallet = () => {
  return (
    <View>
      <FlatList
        data={[1]}
        renderItem={({ item }) => (
          <Coin assetItem={item} />
        )}
        ListHeaderComponent={
          <>
            <View style={styles.container}>
            <View>
              <Text style={styles.balance}>Total Value (btc & usd)</Text>
              <View style={{flexDirection: "row", marginVertical: 5}}>
              <Text style={styles.balanceValue}>0.01872 btc</Text><Text style={{color: 'white'}}> = </Text><Text style={styles.balanceValue}>$2000</Text>
              </View>
              <Text style={styles.allTime}>$1000 (All Time)</Text>
            </View>
            <View style={styles.icon}>
              <AntDesign
                name={"caretup"}
                size={12}
                color={"white"}
                style={{ alignSelf: "center", marginRight: 5 }}
              />
              <Text style={styles.percentChange}>1.2%</Text>
            </View>
          </View>
          <Text style={styles.assetLabel}>My Digital Assets</Text>
          </>
        }
        ListFooterComponent={
          <>
            <Pressable style={styles.buttonContainer}>
              <Text style={styles.buttonText}>text me!</Text>
            </Pressable>
          </>
        }
      />
    </View>
  );
};

export default Wallet;
