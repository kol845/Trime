// import { checkForUpdateAsync } from 'expo-updates';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//import Feed from './src/pages/feed'
import Feed from '../pages/feed'
import Calendar from '../pages/calendar'



import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const Tab = createMaterialBottomTabNavigator();


export default function BottomNav() {

  return (
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Calendar" component={Calendar} />
      </Tab.Navigator>
  );

}