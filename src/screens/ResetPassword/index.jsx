import { View, Text, Pressable, Alert, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Auth } from 'aws-amplify'
import { useNavigation } from '@react-navigation/native'

const ResetPassword = () => {
    const navigation = useNavigation()
    const [details, setDetails] = useState({
        username: '',
        code: '',
        password: ''
    })
    const handleReset = async () => {
        try {
            const response = await Auth.forgotPasswordSubmit(details.username, details.code, details.password)
            Alert.alert(response)
            navigation.navigate('Login')
        } catch (error) {
            Alert.alert(error.message)
        }
    }
  return (
    <View style={{flex: 1}}>
      <Text style={{color: 'white'}}>ResetPassword</Text>

      <View style={{ marginVertical: 10 }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "DroidSans",
              fontWeight: "bold",
              color: 'white'
            }}
          >
            Username
          </Text>
          <TextInput
            placeholder="Enter your username"
            style={{
              marginTop: 10,
              borderBottomWidth: 2,
              borderBottomColor: "green",
              paddingVertical: 10,
              paddingHorizontal: 5,
              color: 'white'
            }}
            onChangeText={(text) => setOtp(text)}
            onChangeText={(text) => setDetails({...details, username: text.toLowerCase()})}
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "DroidSans",
              fontWeight: "bold",
              color: 'white'
            }}
          >
            OTP Code
          </Text>
          <TextInput
            placeholder="Enter your confirmation code"
            style={{
              marginTop: 10,
              borderBottomWidth: 2,
              borderBottomColor: "green",
              paddingVertical: 10,
              paddingHorizontal: 5,
              color: 'white'
            }}
            onChangeText={(text) => setDetails({...details, code: text.toLowerCase()})}
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "DroidSans",
              fontWeight: "bold",
              color: 'white'
            }}
          >
            Password
          </Text>
          <TextInput
            placeholder="Enter a new password"
            style={{
              marginTop: 10,
              borderBottomWidth: 2,
              borderBottomColor: "green",
              paddingVertical: 10,
              paddingHorizontal: 5,
              color: 'white'
            }}
            onChangeText={(text) => setDetails({...details, password: text})}
          />
        </View>
        <Pressable onPress={handleReset}><Text style={{color: 'white'}}>Reset Password</Text></Pressable>
    </View>
  )
}

export default ResetPassword