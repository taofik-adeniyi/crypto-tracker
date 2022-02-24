import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { Auth } from 'aws-amplify'

const ConfirmRegister = () => {
    const route = useRoute()
    const [username, setUsername] = useState(route?.params?.email)
    const [otp, setOtp] = useState('')

    const handleResend = async () => {
        try {
          await Auth.resendSignUp(username)
          Alert.alert('code wa resent to your email');
        } catch (error) {
          Alert.alert(error.message);
        }
      }
      const handleConfirm = async () => {
        try {
          await Auth.confirmSignUp(username, otp)
          setModalVisible(false)
          navigation.navigate('Login')
        } catch (error) {
          Alert.alert(error.message);
        }
      }
  return (
    <View style={{ flex: 1 }}>
    <View style={{ flex: 1, marginTop: 320}}>
      <Text
        style={{
          paddingHorizontal: 20,
          fontFamily: "Merriweather_900Black",
          fontWeight: "bold",
          fontSize: 26,
          color: "white",
        }}
      >
        Verfiy your account
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
          onChangeText={setUsername}
          value={username}
        />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "DroidSans",
            fontWeight: "bold",
          }}
        >
          OTP or Code
        </Text>
        <TextInput
          secureTextEntry
          placeholder="code"
          style={{
            marginTop: 10,
            borderBottomWidth: 2,
            borderBottomColor: "#25282c",
            paddingVertical: 10,
            paddingHorizontal: 5,
          }}
          onChangeText={(text) => setOtp(text)}
          value={otp}
        />
      </View>
      <Pressable
          style={{ marginVertical: 10 }}
          onPress={handleResend}
        >
          <Text
            style={{
              paddingVertical: 10,
              fontWeight: "bold",
              fontFamily: "DroidSans",
              fontSize: 16,
            }}
          >
            resend otp code
          </Text>
        </Pressable>
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
          onPress={()=>handleConfirm()}
        >
          <Text style={{ color: "white", fontWeight: "700" }}>
              Verify
              </Text>
        </Pressable>
      </View>
    </View>
  </View>
  )
}

export default ConfirmRegister