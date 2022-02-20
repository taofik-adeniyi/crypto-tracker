import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import { Ionicons } from '@expo/vector-icons';
import { useIntroSlider } from '../../context/introslider';
import { useNavigation } from '@react-navigation/native';

const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../../../assets/adaptive-icon.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../../../assets/adaptive-icon.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../../../assets/adaptive-icon.png'),
    backgroundColor: '#22bcb5',
  }
];

const NextButton = () => {
  return (
    <View style={{
      width: 40,
      height: 40,
      backgroundColor: 'rgba(0, 0, 0, .2)',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Ionicons name="ios-arrow-forward" size={24} color="rgba(255, 255, 255, .9)" />
      </View>
  )
}

const DoneButton = () => {
  return (
    <View
      style={{
        width: 40,
        height: 40,
        backgroundColor: "rgba(0, 0, 0, .2)",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Ionicons
        name="md-checkmark-sharp"
        size={24}
        color="rgba(255, 255, 255, .9)"
      />
    </View>
  )
}

const renderItem = ({ item }) => {
  return (
    <View style={styles.slide}>
      <Text style={styles.title}>{item.title}</Text>
      <Image source={item.image} />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
}


const IntroSlider = () => {
  const { saveIntroAppScreen } = useIntroSlider()
  const navigation = useNavigation()

  const handleDone = () => {
    saveIntroAppScreen('FALSE')
    navigation.navigate('Login')
  }
  
  const handleSkip = () => {
    saveIntroAppScreen('FALSE')
    navigation.navigate('Login')
  }

  return (
    <AppIntroSlider
        data={slides}
        renderDoneButton={DoneButton}
        renderNextButton={NextButton}
        renderItem={renderItem}
        onDone={handleDone}
        bottomButton
        activeDotStyle={{backgroundColor: 'blue'}}
        showSkipButton
        showNextButton={true}
        showPrevButton={true}
        onSkip={handleSkip}
      />
  )
}



const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1
  },
  title: {
    color: 'white'
  },
  image: {}
  //[...]
});

export default IntroSlider