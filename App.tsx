import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './src/Screens/Splash'
import Signin from './src/Screens/Signin'
import Registration from './src/Screens/Registration'
import ForgetPassword from './src/Screens/ForgetPassword'
import UpdatePassword from './src/Screens/UpdatePassword'
const App = () => {
  const Stack=createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name='Signin' component={Signin}/>
        <Stack.Screen name='Registration' component={Registration}/>
        <Stack.Screen name='ForgetPassword' component={ForgetPassword}/>
        <Stack.Screen name='UpdatePassword' component={UpdatePassword}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})