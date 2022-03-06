import * as React from 'react';
import 'react-native-gesture-handler';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Navigation from './components/Navigation';
import SplashScreen from './components/SplashScreen';
import MainPage from './components/MainPage'

const Stack = createStackNavigator();

const Auth = () => {
    return(
      <Navigation/>
    )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name = "Auth"
          component = {Auth}
          options = {{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
