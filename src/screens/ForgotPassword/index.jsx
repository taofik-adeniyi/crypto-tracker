import { View, Text, TextInput, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { Auth } from 'aws-amplify'
import { useNavigation } from '@react-navigation/native'

const ForgotPassword = () => {
    const navigation = useNavigation()
    const [username, setUsername] = useState()
    const handleForgotPassword = async () => {
        try {
            await Auth.forgotPassword(username)
            navigation.navigate('ResetPassword')
        } catch (error) {
            Alert.alert(error.message)            
        }
    }
  return (
    <View>
      <Text style={{color: 'white'}}>ForgotPassword</Text>
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
            placeholder="username"
            style={{
              marginTop: 10,
              borderBottomWidth: 2,
              borderBottomColor: "green",
              paddingVertical: 10,
              paddingHorizontal: 5,
              color: 'white'
            }}
            value={username}
            onChangeText={(text) => setUsername(text.toLowerCase())}
          />
        </View>
        <Pressable onPress={handleForgotPassword}>
            <Text style={{color: 'white'}}>Resend</Text>
        </Pressable>
    </View>
  )
}

export default ForgotPassword