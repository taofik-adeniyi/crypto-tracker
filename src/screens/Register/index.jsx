import {
  View,
  Text,
  Pressable,
  ImageBackground,
  TextInput,
  Alert,
  Modal,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import React, { useState } from "react";
import { Auth } from "aws-amplify";
import KeyboardWrapper from '../../container/KeyboardWrapper'

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
const Register = (props) => {
  const { navigation } = props;
  const [modalVisible, setModalVisible] = useState(false)
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    name: "",
    username: "",
  });
  const [otp, setOtp] = useState('')

  const handleRegister = async () => {
    console.log(userDetails);
    try {
      const response = await Auth.signUp({
        username: userDetails.username,
        password: userDetails.password,
        attributes: {
          email: userDetails.email,
          name: userDetails.name,
          preferred_username: userDetails.username
        },
      });
      console.log(response);
      navigation.navigate('ConfirmRegister', {email: userDetails.email})
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  
  return (
    <KeyboardWrapper>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
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
          Welcome!
        </Text>
      </View>

      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          height: 500,
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
            Username
          </Text>
          <TextInput
            placeholder="username"
            style={{
              borderBottomWidth: 2,
              borderBottomColor: "gray",
              paddingVertical: 5,
              paddingHorizontal: 5,
            }}
            onChangeText={(text) => setUserDetails({...userDetails, username: text.toLowerCase()})}
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
            Name
          </Text>
          <TextInput
            placeholder="name"
            style={{
              borderBottomWidth: 2,
              borderBottomColor: "gray",
              paddingVertical: 5,
              paddingHorizontal: 5,
            }}
            onChangeText={(text) => setUserDetails({...userDetails, name: text})}
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
            Email
          </Text>
          <TextInput
            placeholder="email"
            style={{
              borderBottomWidth: 2,
              borderBottomColor: "gray",
              paddingVertical: 5,
              paddingHorizontal: 5,
            }}
            onChangeText={(text) => setUserDetails({...userDetails, email: text.toLowerCase()})}
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
              borderBottomWidth: 2,
              borderBottomColor: "gray",
              paddingVertical: 5,
              paddingHorizontal: 5,
            }}
            onChangeText={(text) => setUserDetails({...userDetails, password: text})}
          />
        </View>
        <Pressable
          style={{ marginVertical: 5 }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            style={{
              paddingVertical: 5,
              fontWeight: "bold",
              fontFamily: "DroidSans",
              fontSize: 16,
            }}
          >
            already a member sign in here {">>"}
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
            onPress={handleRegister}
          >
            <Text style={{ color: "white", fontWeight: "700" }}>Sign up</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </KeyboardWrapper>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "80%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Register;
