import { View, Text, TextInput, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { Auth } from 'aws-amplify'
import { useNavigation } from '@react-navigation/native'

const ForgotPassword = () => {
    const navigation = useNavigation()
    const [username, setUsername] = useState()
    const handleForgotPassword = async () => {
        try {
            const res = await Auth.forgotPassword(username)
            console.log('the re for reset password', res);
            navigation.navigate('ResetPassword')
        } catch (error) {
            Alert.alert(error.message)            
        }
    }
  return (
    <View style={{ flex: 1 }}>
    <View style={{ flex: 1}}>
    <Pressable onPress={() => navigation.goBack()}>
        <Text style={{color: 'white', padding: 20}}>Back</Text>
        </Pressable>
      <Text
        style={{
          paddingHorizontal: 20,
          paddingTop: 250,
          fontFamily: "Merriweather_900Black",
          fontWeight: "bold",
          fontSize: 26,
          color: "white",
        }}
      >
        Forgot Password
      </Text>
    </View>

    <View
      style={{
        height: 420,
        border: 1,
        padding: 20,
        paddingTop: 30,
        backgroundColor: "white",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
      <View style={{ marginVertical: 10 }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "DroidSans",
            fontWeight: "bold",
          }}
        >
          Username or Email
        </Text>
        <TextInput
          placeholder="username"
          style={{
            marginTop: 10,
            borderBottomWidth: 2,
            borderBottomColor: "#25282c",
            paddingVertical: 10,
            paddingHorizontal: 5,
          }}
          value={username}
            onChangeText={(text) => setUsername(text.toLowerCase())}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignSelf: "flex-end",
        }}
        
      >
        <Pressable
          style={{
            borderRadius: 20,
            paddingVertical: 12,
            paddingHorizontal: 55,
            backgroundColor: "#25282c",
          }}
          onPress={handleForgotPassword}
        >
          <Text style={{ color: "white", fontWeight: "700" }}>
          Send OTP
              </Text>
        </Pressable>
      </View>
    </View>
  </View>
  )
}

export default ForgotPassword


