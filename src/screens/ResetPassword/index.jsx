import { View, Text, Pressable, Alert, TextInput } from "react-native";
import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
import KeyboardWrapper from '../../container/KeyboardWrapper'

const ResetPassword = () => {
  const navigation = useNavigation();
  const [details, setDetails] = useState({
    username: "",
    code: "",
    password: "",
  });
  const handleReset = async () => {
    try {
      const response = await Auth.forgotPasswordSubmit(
        details.username,
        details.code,
        details.password
      );
      Alert.alert(response);
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <KeyboardWrapper>
      <View style={{ flex: 1 }}>
        <Pressable onPress={() => navigation.goBack()}>
        <Text style={{color: 'white' ,padding: 20}}>Back</Text>
        </Pressable>
        <Text
          style={{
            paddingTop: 320,
            paddingHorizontal: 20,
            fontFamily: "Merriweather_900Black",
            fontWeight: "bold",
            fontSize: 26,
            color: "white",
          }}
        >
          Reset Password!
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
            }}
            onChangeText={(text) =>
              setDetails({ ...details, username: text.toLowerCase() })
            }
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
            OTP code
          </Text>
          <TextInput
            placeholder="name"
            style={{
              marginTop: 10,
              borderBottomWidth: 2,
              borderBottomColor: "green",
              paddingVertical: 10,
              paddingHorizontal: 5,
            }}
            secureTextEntry
            onChangeText={(text) =>
              setDetails({ ...details, code: text.toLowerCase() })
            }
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
              borderBottomColor: "green",
              paddingVertical: 10,
              paddingHorizontal: 5,
            }}
            secureTextEntry
            onChangeText={(text) => setDetails({ ...details, password: text })}
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
            onPress={handleReset}
          >
            <Text style={{ color: "white", fontWeight: "700" }}>Reset</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardWrapper>
  );
};

export default ResetPassword;
