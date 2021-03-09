// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, Alert, ImageBackground, StatusBar } from 'react-native';
import { Dimensions } from 'react-native';

// import heroImg from "./../images/hero-image.png"

import Footer from './../components/Footer'
import InfoModal from '../components/modals/InfoModal'
import LoginInput from '../components/LoginInput'

const vh = Dimensions.get('window').height/100;


export default function Login() {
  const [ptInfoVisible, setPtInfoVisible] = useState(false);
  
  return (
    <View style={styles.loginRoot}>
      <InfoModal visible={ptInfoVisible} closeFunc={()=>setPtInfoVisible(!ptInfoVisible)}>
        Answer the questions so we can give you the best recommendations on PT’s just for you!{"\n"}{"\n"}
        You can also fill it in on your profile later on. 
      </InfoModal>

      <ImageBackground style={styles.hero} source={require('./../images/hero-image.png')}>
          <Text>Trime</Text>
      </ImageBackground>
      <View>
        <View style={styles.bodyContainer}>
          <LoginInput label="Email" placeholder="Enter email" isPassword={false}/>
          <LoginInput label="Password" placeholder="Enter password" isPassword={true}/>
          <Text style={styles.forgotText}>Forgot password?</Text>
          <View>
            <Button 
            title="Sign in"
            onPress={() => {setPtInfoVisible(!ptInfoVisible)}}/>
            <Button
              title="Sign up"
              onPress={() => console.log('Sign up pressed!')}/>
            
          </View>
        </View>
        <View>
          <Text>Or</Text>
          <View/>
          <View/>
        </View>
      </View>
      {/* </ScrollView> */}
      <Footer  isSignUp={true}/>
    </View>
    
  );
}
const styles = StyleSheet.create({
    loginRoot:{
      flex: 1,
      paddingTop: ( Platform.OS === 'ios' ) ? 20 : StatusBar.currentHeight,
    },

    hero:{
        flex: 1,
        backgroundColor:"red",
    },
    bodyContainer:{
      paddingHorizontal:16,
    },
    forgotText:{
      textAlign:"right"
      
    }
  });