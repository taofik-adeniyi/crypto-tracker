import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const IntroSliderContext = createContext();

export const useIntroSlider = () => {
    return useContext(IntroSliderContext)
};

const IntroSlider = ({children}) => {
  const checkIntroAppScreen = async () => {
    try {
      const datata = await AsyncStorage.getItem("@checkintroapp");
      setShowAppIntro(datata != null ? JSON.parse(datata) : 'true');
    } catch (e) {
      console.log(e);
    }
  }
  const [showAppIntro, setShowAppIntro] = useState(() => checkIntroAppScreen());


  const saveIntroAppScreen = async (value) => {
    try {
      await AsyncStorage.setItem("@checkintroapp", value);
      setShowAppIntro(value)
    } catch (e) {
      console.log(e);
    }
  }

  const myname = 'taofik'
  const values = {
    showAppIntro, 
    setShowAppIntro, 
    myname,
    saveIntroAppScreen
  }
  return (
    <IntroSliderContext.Provider value={values}>
      {children}
    </IntroSliderContext.Provider>
  );
};

export default IntroSlider;
