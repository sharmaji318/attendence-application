import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button,TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Line from './Line';

import { Ionicons } from '@expo/vector-icons';

var dateInfo = []

export default function TakeAttendenceScreen({ navigation }) {
  const [pickedImagePath, setPickedImagePath] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const addInfo = currentDate => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + '/' + month + '/' + year 
      + ' ' + hours + ':' + min + ':' + sec
    );
    dateInfo = [...dateInfo, currentDate]
}

  
  const openCamera = async () => {

    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }
    const result = await ImagePicker.launchCameraAsync();
    console.log(result);
    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  }
  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library 
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  }
   return (
    <View style={styles.screen}>
    <View style={styles.imageContainer}>
       {
          pickedImagePath !== '' ? <Image
            source={{ uri: pickedImagePath }}
            style={styles.image}
          /> : <Image
            source={require('../assets/User.png')}
            style={styles.image}
            resizeMode={'containt'}
          />
        }
      </View>
      <View style={styles.buttonContainer}>
        {/*<Button onPress={showImagePicker} title="Select an image" />*/}
        <View>
          <View style={{flexDirection:'row',justifyContent: 'space-between',marginHorizontal:20,}}>
            <Button onPress={openCamera} title="Reject"  color="red"/>
            <Button onPress={addInfo} title="Accept" color="green"/>
          </View>
          <Line />
        </View>
      </View>
      <View style={{alignItems:'center'}}>
         <TouchableOpacity onPress={openCamera}>
            <Ionicons name="ios-radio-button-on-outline" size={80} color="black" />
          </TouchableOpacity>
      </View>
    </View>
   );
 }

 const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 400,
    justifyContent: 'space-between',
  },
  imageContainer: {
    padding: 30
  },
  image: {
    width: 200,
    height: 200,
    borderRadius:200
  }
});