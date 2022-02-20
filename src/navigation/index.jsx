import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import CoinDetail from "../screens/CoinDetail";
import CoinDetailNewChart from "../screens/CoinDetailNewChart";
import BottomNavigator from "./bottom";
import WalletDetail from "../screens/WalletDetail";
import Settings from "../screens/Settings";
import DrawerNavigator from "./drawer";
import Profile from "../screens/Profile";
import IntroSlider from "../screens/IntroSlider";
import Register from "../screens/Register";
import Login from "../screens/Login";
import StacksNavigator from "./stack";
import { useIntroSlider } from "../context/introslider";
import { useAuthContext } from "../context/auth";
import Welcome from "../screens/Welcome";
import ForgotPassword from "../screens/ForgotPassword";
import ResetPassword from "../screens/ResetPassword";
import { Auth, Hub } from 'aws-amplify'

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const IntroStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Register" component={Register} />
      <HomeStack.Screen name="Login" component={Login} />
      <HomeStack.Screen name="Home" component={DrawerNavigator} />
    </HomeStack.Navigator>
  );
}

const New = () => {
  return (
    <View>
      <Text style={{color: 'white'}}>Hello News</Text>
    </View>
  )
}

function IntroSliderStackScreen() {
  const { isLoggedIn, user } = useAuthContext();
  const { showAppIntro } = useIntroSlider();
  const [myuser, setMyUser] = useState(undefined)

 
  const checkUser = async () => {
    try {
      const response = await Auth.currentAuthenticatedUser({bypassCache: true})
    setMyUser(response)
    } catch (error) {
      console.log(error.message);
      setMyUser(null)
    }
  }
  useEffect(() => {
    checkUser()
  }, [])

  useEffect(() => {
    const listener = data => {
      console.log(data);
      if(data?.payload.event === 'signOut' || data?.payload.event === 'signIn'){
        checkUser();
      }
    }
    Hub.listen('auth', listener)
    return () => Hub.remove('auth', listener)
  }, [])
  console.log('what is showAppIntro', showAppIntro === 'TRUE' ? 'write true' : 'write false');

  if(myuser === undefined){
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <IntroStack.Navigator screenOptions={{headerShown: false}}>
      {showAppIntro === 'TRUE' ? <IntroStack.Screen name="IntroSlider" component={IntroSlider} /> : null}
      
      {/* <IntroStack.Screen name="HomeStackScreen" component={HomeStackScreen} /> */}
     {
       myuser ? (
        <IntroStack.Screen name="Home" component={DrawerNavigator} />
       ) : (
         <>
         <IntroStack.Group>
         <IntroStack.Screen name="Welcome" component={Welcome} />
         <IntroStack.Screen name="Register" component={Register} />
         <IntroStack.Screen name="Login" component={Login} />
         <IntroStack.Screen name="ForgotPassword" component={ForgotPassword} options={{presentation: 'modal'}} />
         <IntroStack.Screen name="ResetPassword" component={ResetPassword} options={{presentation: 'modal'}} />
       </IntroStack.Group>
         </>
       )
     }
      
      

      
    </IntroStack.Navigator>
  )
}

const Navigation = () => {
  const { showAppIntro } = useIntroSlider();
  const { isLoggedIn, user } = useAuthContext();
  
  // console.log('wetin be auth 000000', auth, 'app intro', showAppIntro);
  return (
    <Stack.Navigator
      initRouteName="Intro"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Intro" component={IntroSliderStackScreen} />
      {/* {showAppIntro === "true" ? (
          <Stack.Screen name="IntroSlider" component={IntroSlider} />
      ) : null} */}
      
      {/* <Stack.Screen name="HomeStackScreen" component={HomeStackScreen} /> */}
        
      {/* <Stack.Group> */}
        
        {/* {
          isLoggedIn ? <>
          <Stack.Screen name="HomeStackScreen" component={HomeStackScreen} />
          <Stack.Screen name="Home" component={Login} />
          </> : null
        } */}
        
        {/* <Stack.Screen name="Home" component={DrawerNavigator} /> */}
        {/* <Stack.Screen name="CoinDetail" component={CoinDetailNewChart} /> */}
        {/* <Stack.Screen name="WalletDetail" component={WalletDetail} /> */}
      {/* </Stack.Group> */}

      {/* <Stack.Screen name="CoinDetail" component={CoinDetailNewChart} /> */}

      {/* <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
      {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="Invite" component={Invite} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
};

export default Navigation;
