import * as React from 'react';
import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
   return (
        <View style={styles.container}>
          <Text style={styles.heading}>{'Profile Screen'}</Text>
          <Text style={styles.text}>{'Name:'}</Text>
          <Text style={styles.text}>{'Date of Birth:'}</Text>
          <Text style={styles.text}>{'Email:'}</Text>
          <Text style={{textAlign:'center', fontSize:16,color:'blue', margin:50}}>Edit</Text>
        </View>
   );
 }

 const styles = StyleSheet.create({
   container:{
     flex: 1, 
     backgroundColor:'white',
   },
   text:{
    fontSize:16,
    fontWeight:'700',
    margin:20,
   },
   heading:{
     textAlign:'center',
     margin:50,
     fontSize:16,
     fontWeight:'700'
   }
 })