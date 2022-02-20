import {
  View,
  Text,
  Pressable,
  ImageBackground,
  TextInput,
  Alert
} from "react-native";
import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { set } from "react-native-reanimated";

{
  /* <View>
      <Text style={{color: 'white'}}> Register</Text>
      <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={{color: 'white'}}>already have an account</Text>
      </Pressable>
    </View> */
}
const image = {
  uri: "https://images.unsplash.com/photo-1641140313922-bd58c0560a76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
};
const Login = (props) => {
  const { navigation } = props;
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogIn = async () => {
    if(loading) return
    setLoading(true)
    try {
      const response = await Auth.signIn(username, password)
    console.log(response);
    setLoading(false);
    } catch (error) {
      Alert.alert(error.message)
    }
    setLoading(false)
    // console.log(username, password);
    // console.log('hello');
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {/* <ImageBackground source={image} resizeMode="cover" style={{justifyContent: "center", flex: 1}}>
      <Text style={{color: 'white'}}>Inside</Text>
      </ImageBackground> */}
        <Text
          style={{
            paddingTop: 100,
            paddingHorizontal: 20,
            fontFamily: "Merriweather_900Black",
            fontWeight: "bold",
            fontSize: 26,
            color: "white",
          }}
        >
          Welcome Back!
        </Text>
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
            Password
          </Text>
          <TextInput
            secureTextEntry
            placeholder="password"
            style={{
              marginTop: 10,
              borderBottomWidth: 2,
              borderBottomColor: "#25282c",
              paddingVertical: 10,
              paddingHorizontal: 5,
            }}
            onChangeText={setPassword}
            value={password}
          />
        </View>
        <Pressable
          style={{ marginVertical: 10 }}
          onPress={() => navigation.navigate("Register")}
        >
          <Text
            style={{
              paddingVertical: 10,
              fontWeight: "bold",
              fontFamily: "DroidSans",
              fontSize: 16,
            }}
          >
            not yet a member register here {">>"}
          </Text>
          <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
          <Text
            style={{
              paddingVertical: 10,
              fontWeight: "bold",
              fontFamily: "DroidSans",
              fontSize: 16,
            }}
          >
            Forgot Password {">>"}
          </Text>
          </Pressable>
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
            onPress={() => handleLogIn()}
          >
            <Text style={{ color: "white", fontWeight: "700" }}>{loading ? 'loading ...' : 'Sign in'}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Login;
