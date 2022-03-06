import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {View,Image,Text} from 'react-native'

import Ionicons from 'react-native-vector-icons';

import MainPage from './MainPage'
import Profile from './Profile';
import TakeAttendence from './TakeAttendence';
import ViewAttendence from './ViewAttendnce';

import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export default function NavigationOprator() {
return (
      <Drawer.Navigator 
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'black',
          width: 200,
        },
        drawerActiveTintColor:'white',
        drawerInactiveTintColor:'white',
        headerTintColor:'white',
        headerTitle : 'STADIUM',
        headerStyle:{backgroundColor:'red'},

  }}>

        <Drawer.Screen 
            name="HomePage" 
            component={ MainPage }
            options={{ 
              drawerLabel: 'HomePage',
              }}/>
        <Drawer.Screen 
            name="Profile" 
            component={ Profile } 
            options={{ 
              drawerLabel: 'Profile',}}/>
        
        <Drawer.Screen 
            name="TakeAttendence" 
            component={ TakeAttendence } 
            options={{ 
              drawerLabel: 'TakeAttendence',
              }}/>
        
        <Drawer.Screen 
            name="ViewAttendence" 
            component={ ViewAttendence } 
            options={{ 
              drawerLabel: 'ViewAttendence', }}/>
      </Drawer.Navigator>
   );
};