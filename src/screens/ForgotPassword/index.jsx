import { View, Text, TextInput, Pressable, Alert,  KeyboardAvoidingView, TouchableWithoutFeedback,
  Platform, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Auth } from 'aws-amplify'
import { useNavigation } from '@react-navigation/native'
import KeyboardWrapper from '../../container/KeyboardWrapper'

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
    
        <KeyboardWrapper>
    <View style={{ flex: 1}}>
    <Pressable onPress={() => navigation.goBack()}>
        <Text style={{color: 'white', padding: 20}}>Back</Text>
        </Pressable>
      <View style={{justifyContent: 'flex-end', flex: 1}}>
      <Text
        style={{
          paddingHorizontal: 20,
          fontFamily: "Merriweather_900Black",
          fontWeight: "bold",
          fontSize: 26,
          color: "white",
          paddingBottom: 10
        }}
      >
        Forgot Password
      </Text>
      </View>
    </View>

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}

      style={{
        height: 420,
        border: 1,
        padding: 20,
        backgroundColor: "white",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
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
            borderBottomColor: "gray",
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
    </KeyboardAvoidingView>
    </KeyboardWrapper>
  )
}

export default ForgotPassword


