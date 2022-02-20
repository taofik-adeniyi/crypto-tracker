import { View, Text, Pressable, ImageBackground, TextInput } from 'react-native'
import React from 'react'

{/* <View>
      <Text style={{color: 'white'}}> Register</Text>
      <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={{color: 'white'}}>already have an account</Text>
      </Pressable>
    </View> */}
    const image = {uri: 'https://images.unsplash.com/photo-1641140313922-bd58c0560a76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'}
const Register = (props) => {
    const {navigation} = props
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1}}>
      {/* <ImageBackground source={image} resizeMode="cover" style={{justifyContent: "center", flex: 1}}>
      <Text style={{color: 'white'}}>Inside</Text>
      </ImageBackground> */}
      <Text style={{paddingTop: 100, paddingHorizontal: 20, fontFamily: 'Merriweather_900Black', fontWeight: 'bold', fontSize: 26, color: 'white'}}>Welcome!</Text>
      </View>

      <View
        style={{
          height: 620,
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
        <View style={{marginVertical: 10}}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "DroidSans",
            fontWeight: "bold",
          }}
        >
          Username
        </Text>
        <TextInput placeholder="username" style={{marginTop: 10, borderBottomWidth: 2, borderBottomColor: 'green', paddingVertical: 10, paddingHorizontal: 5}} />
        </View>
        <View style={{marginVertical: 10}}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "DroidSans",
            fontWeight: "bold",
          }}
        >
          Email
        </Text>
        <TextInput placeholder="email" style={{marginTop: 10, borderBottomWidth: 2, borderBottomColor: 'green', paddingVertical: 10, paddingHorizontal: 5}} />
        </View>
        <View style={{marginVertical: 10}}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "DroidSans",
            fontWeight: "bold",
          }}
        >
          Password
        </Text>
        <TextInput secureTextEntry placeholder="password" style={{marginTop: 10, borderBottomWidth: 2, borderBottomColor: 'green', paddingVertical: 10, paddingHorizontal: 5}} />
        </View>
        <Pressable style={{marginVertical: 10}} onPress={() => navigation.navigate('Login')}>
        <Text
          style={{
            paddingVertical: 10,
            fontWeight: "bold",
            fontFamily: "DroidSans",
            fontSize: 16,
          }}
        >
          already a member sign in here {'>>'}
        </Text>
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignSelf: "flex-end"
          }}
        >

<View style={{borderRadius: 20,
            paddingVertical: 12,
            paddingHorizontal: 55, backgroundColor: "#25282c"}}><Text style={{color: 'white', fontWeight: "700" }}>Sign up</Text></View>
          
        </View>
      </View>
    </View>
  )
}

export default Register