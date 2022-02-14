import { View, Text, Pressable } from 'react-native'
import React from 'react'

const Login = (props) => {
    const {navigation} = props
  return (
    <View>
      <Text style={{color: 'white'}}>Login</Text>
      <Pressable onPress={() => navigation.navigate('Home')}>
          <Text style={{color: 'white'}}>login here</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={{color: 'white'}}>register here</Text>
      </Pressable>
    </View>
  )
}

export default Login