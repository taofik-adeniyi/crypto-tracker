import { useNavigation } from '@react-navigation/native'
import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

const Auth = ({children}) => {
    const navigation = useNavigation()
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const logOut = () => {
        setIsLoggedIn(false)
        navigation.navigate('Login')
    }
    const values = {
        isLoggedIn,
        user: {
            name: 'taofik',
            uid: '1274iuythnrfivkgv84'
        },
        logOut
    }
  return <AuthContext.Provider value={values}>
      {children}
  </AuthContext.Provider>
}

export default Auth