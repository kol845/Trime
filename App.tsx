import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
// import { checkForUpdateAsync } from 'expo-updates';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//import Feed from './src/pages/feed'
import Login from './src/pages/login'
import Signup from './src/pages/signup'


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { useFonts, RedHatDisplay_400Regular } from '@expo-google-fonts/red-hat-display';
import { Text } from 'react-native';

const Stack = createStackNavigator();


export default function App() {
  let [fontsLoaded] = useFonts({
    RedHatDisplay_400Regular,
  });
  if (!fontsLoaded) {
    return <Text>LOADING</Text>;
  }
  return (
  <NavigationContainer>
    <Stack.Navigator  
      screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name="Signin" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  </NavigationContainer>
   

  );
}


