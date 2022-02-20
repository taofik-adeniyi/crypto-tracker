import { View, Text, ImageBackground, Pressable, TouchableOpacity } from "react-native";
import React from "react";
// https://images.unsplash.com/photo-1639843885527-43b098a9661a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80
// https://images.unsplash.com/photo-1641140313922-bd58c0560a76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80
// https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80
// https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80
const image = { uri: "https://images.unsplash.com/photo-1639843885527-43b098a9661a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80" };

const Welcome = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
      <ImageBackground source={image} resizeMode="cover" style={{justifyContent: "center", flex: 1}} />
      </View>

      <View
        style={{
          height: 320,
          border: 1,
          padding: 20,
          paddingTop: 30,
          backgroundColor: "white",
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          position: "absolute",
          bottom: 0,
          width: '100%',
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontFamily: "Inter_900Black",
            fontWeight: "bold",
          }}
        >
          Your one stop crypto shop !
        </Text>
        <Pressable onPress={() => navigation.navigate('Register')}>
        <Text
          style={{
            paddingVertical: 10,
            fontWeight: "bold",
            fontFamily: "DroidSans",
            fontSize: 16,
          }}
        >
          Register now!
        </Text>
        </Pressable>
        <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
          style={{
            alignItems: "center",
            alignSelf: "flex-end",
            backgroundColor: "green",
            borderRadius: 20,
            padding: 10,
            paddingHorizontal: 35,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            get started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
