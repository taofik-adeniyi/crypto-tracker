import { View, Text, Pressable } from 'react-native'
import React from 'react'

const Register = (props) => {
    const {navigation} = props
  return (
    <View>
      <Text style={{color: 'white'}}> Register</Text>
      <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={{color: 'white'}}>already have an account</Text>
      </Pressable>
    </View>
  )
}

export default Register