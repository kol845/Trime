// import { StatusBar } from 'expo-status-bar';
// import { checkForUpdateAsync } from 'expo-updates';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//import Feed from './src/pages/feed'
import Login from './src/pages/login'

import { useFonts, RedHatDisplay_400Regular } from '@expo-google-fonts/red-hat-display';
import { Text, View, ScrollView } from 'react-native';

export default function App() {
  let [fontsLoaded] = useFonts({
    RedHatDisplay_400Regular,
  });
  if (!fontsLoaded) {
    return <Text>LOADING</Text>;
  }
  return (

    <View>

      <Login/>

    </View>    

  );
}


