import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    name: {
      color: 'white', fontSize: 15
    },
    currentPrice: {
      color: 'white', fontSize: 25, fontWeight: '600', letterSpacing: 1
    },
    priceContainer: {
      paddingTop: 15, 
      paddingLeft: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    priceChange: {
      color: 'white', fontSize: 15, fontWeight: '500'
    },
    input: {
      flex: 1,
      height: 40,
      margin: 12,
      borderBottomWidth: 1,
      borderBottomColor: 'white',
      padding: 10,
      fontSize: 16,
      color: 'white'
    },
    datefilterContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#2B2B2B',
      paddingVertical: 5,
      borderRadius: 5,
      marginVertical: 10,
      marginBottom: 20
    }
  });

export default styles