import { View, Text, Pressable, TouchableOpacity, Switch } from "react-native";
import React from "react";
import {
  useNavigation,
  DrawerActions,
  useRoute,
} from "@react-navigation/native";
import { useThemeContext } from "../../context/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { useAuthContext } from "../../context/auth";

const DrawerScreen = () => {
  const route = useRoute();
  const { logOut } = useAuthContext()
  const { dark, theme, toggle } = useThemeContext();
  const navigation = useNavigation();
  const handleNavigate = (route) => {
    navigation.navigate(route);
  };
  console.log("what is navigation?", navigation, route);
  return (
    <View>
      <View style={{ flex: 1 }}>
        <View style={{}}>
          <Pressable
            style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          >
            {/* <FontAwesome name="close" size={24} color="black" /> */}
            <MaterialCommunityIcons
              name="close-circle-multiple-outline"
              size={24}
              color="black"
            />
            <Text style={{ marginHorizontal: 5, fontWeight: "600" }}>
              Close
            </Text>
          </Pressable>
          <View
            style={{
              marginLeft: 10,
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "top"
            }}
          >
            <View>
              <FontAwesome5 name="user-edit" size={20} color="black" />
              <Text style={{ marginVertical: 5 }}>Taofik. Adeniyi A</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: '#4ae079', borderTopLeftRadius: 5, borderBottomLeftRadius: 5, padding: 5}}>
              <MaterialCommunityIcons
                name="shield-check"
                size={15}
                color="#164f09"
              />
              <Text style={{ fontSize: 12, paddingHorizontal: 5 }}>Verified</Text>
            </View>
          </View>
          <Pressable
            style={{
              margin: 10,
              padding: 12,
              borderRadius: 5,
              backgroundColor: "#25282c",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            onPress={() => handleNavigate("Home")}
          >
            <View style={{flexDirection: "row", alignItems: "center"}}>
            <Entypo name="home" size={24} color="white" />
            <Text style={{ color: "#ffffff", marginLeft: 5 }}>Home</Text>
            </View>
            <AntDesign name="rightcircleo" size={20} color="#ffffff" />
          </Pressable>
          <Pressable
            style={{
              margin: 10,
              padding: 12,
              borderRadius: 5,
              backgroundColor: "#25282c",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            onPress={() => handleNavigate("Profile")}
          >
              <View style={{flexDirection: "row", alignItems: "center"}}>

            <MaterialCommunityIcons
              name="comment-account"
              size={24}
              color="white"
            />
            <Text style={{ color: "#ffffff", marginLeft: 5 }}>Profile</Text>
              </View>
            <AntDesign name="rightcircleo" size={20} color="#ffffff" />
          </Pressable>
          <Pressable
            style={{
              margin: 10,
              padding: 12,
              borderRadius: 5,
              backgroundColor: "#25282c",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            onPress={() => handleNavigate("Settings")}
          >
            <View style={{flexDirection: "row", alignItems: "center"}}>
            <Fontisto name="player-settings" size={24} color="white" />
            <Text style={{ color: "#ffffff", marginLeft: 5 }}>Settings</Text>
            </View>
            <AntDesign name="rightcircleo" size={20} color="#ffffff" />
          </Pressable>
        </View>

        <View
          style={{
            marginTop: 20,
            marginBottom: 50,
            marginRight: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ marginHorizontal: 10, fontWeight: "700" }}>
            Toggle
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#ccc" }}
            thumbColor={dark ? "#fff" : "#f4f3f4"}
            onChange={toggle}
            value={dark}
          />
        </View>
      </View>

      <TouchableOpacity
        style={{
          marginHorizontal: 10,
          width: "93%",
          borderRadius: 5,
          backgroundColor: "blue",
          paddingVertical: 15,
          paddingLeft: 10,
          alignItems: "center",
        }}
        onPress={() => logOut()}
      >
        <Text style={{ color: "black", fontWeight: "500" }}>Sign out</Text>
      </TouchableOpacity>
      <View style={{ marginTop: 20, padding: 10 }}>
        <Text style={{ fontSize: 12, lineHeight: 16 }}>
          Please do not disclose SMS and Google Authenticator codes to anyone,
          including Binace customer support
        </Text>
      </View>
    </View>
  );
};

export default DrawerScreen;
