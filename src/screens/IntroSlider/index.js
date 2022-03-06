import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import { Ionicons } from '@expo/vector-icons';
import { useIntroSlider } from '../../context/introslider';
import { useNavigation } from '@react-navigation/native';

const slides = [
  {
    key: 1,
    title: 'Welcome to Stop Shop',
    text: 'Thinking Crypto.\n your one stop shop to buy goods with your crypto',
    image: require('../../../assets/thinkingcrypto.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Browse our Product\'s',
    text: 'Check for fashion items electronic\'s and Other cool stuff',
    image: require('../../../assets/browseproducts.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Want to buy a Rocket',
    // text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    text: 'Jerry wont sell at your price contact Tom and have a nice deal',
    image: require('../../../assets/tradecrypto.png'),
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
      <Image source={item.image} style={{width: '90%', height: 300}} />
      <View style={{marginVertical: 10}}>
      <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={{width: '85%', marginVertical: 10}}>
      <Text style={styles.text}>{item.text}</Text>
      </View>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25
  },
  text: {
    color: 'gray',
    fontSize: 16,
    textAlign: 'center',
  },
  image: {}
  //[...]
});

export default IntroSlider