/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/

import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import RNLocation from 'react-native-location';

RNLocation.configure({
  distanceFilter: null
})





const App = () => {
  [viewLocation, isViewLocation] = useState([])

  const getLocation = async () => {

    console.log('here')


    let permission = await RNLocation.checkPermission({
      // ios: 'whenInUse', // or 'always'
      android: {
        detail: 'coarse' // or 'fine'
      }
    });

    let location;

    if (!permission) {
      permission = await RNLocation.requestPermission({
        ios: "whenInUse",
        android: {
          detail: "coarse",
          rationale: {
            title: "We need to access your location",
            message: "We use your location to show where you are on the map",
            buttonPositive: "OK",
            buttonNegative: "Cancel"
          }
        }
      })
      console.log(permission)
      location = await RNLocation.getLatestLocation({ timeout: 100 })
      // console.log(location, location.longitude, location.latitude,
      //   location.timestamp)
      isViewLocation(location)
      console.log("latitude: ", viewLocation.latitude, "\nlongitude: ", viewLocation.longitude)
    } else {
      console.log("Here 7")
      location = await RNLocation.getLatestLocation({ timeout: 100 })
      // console.log(location, location.longitude, location.latitude,
      // location.timestamp)
      isViewLocation(location)
      console.log("latitude: ", viewLocation.latitude, "\nlongitude: ", viewLocation.longitude)
    }
  }


  return (
    <View style={styles.container}>
      <Text style={textStyle.text} >Welcome!</Text>
      <View style={{ marginTop: 10, padding: 10, borderRadius: 10, width: '40%' }}>
        <Button title="Get Location"
          onPress={getLocation}
        />
      </View>
      <Text style={textStyle.text}>Latitude: {viewLocation.latitude} </Text>
      <Text style={textStyle.text}>Longitude: {viewLocation.longitude} </Text>
      <View style={{ marginTop: 10, padding: 10, borderRadius: 10, width: '40%' }}>
        <Button
          title="Send Location"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    textColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },


});

const textStyle = StyleSheet.create({
  text: {
    color: '#000'
  }
});

export default App;