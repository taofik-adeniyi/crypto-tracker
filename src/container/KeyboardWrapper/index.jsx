import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'

const KeyboardWrapper = (props) => {
    const { children } = props
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
        <View style={{ flex: 1, position: 'relative' }}>
            {children}
        </View>
    </TouchableWithoutFeedback>
  )
}

export default KeyboardWrapper