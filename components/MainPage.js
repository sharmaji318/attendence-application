import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {View,Text,StyleSheet,Image} from 'react-native'

import Profile from './Profile'
import TakeAttendence from './TakeAttendence'
import ViewAttendence from './ViewAttendnce'

const Drawer = createDrawerNavigator();

export default function MainPage() {
 return (
    
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/Logo.jpg')}/>
      <Text style={styles.text}>"Welcome PANKAJ!"</Text>
      
    </View>
 );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
  },
  text:{
    fontSize:20,

  },
  logo:{
    margin:10,
    height:100,
    width:100
  }
})