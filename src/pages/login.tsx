// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, Alert, ImageBackground } from 'react-native';
import { Dimensions } from 'react-native';
import StatusBar from './../components/StatusBar';

// import heroImg from "./../images/hero-image.png"

import Footer from './../components/Footer'



const vh = Dimensions.get('window').height/100;

// export default function Login() {
//   return (
//     <View style={styles.root}>
//       <Text> This is Main Container View. </Text>
//       {/* </ScrollView> */}
//       <View style={ styles.bottomView} >
 
//         <Text >This is Bottom View.</Text>
 
//       </View>
//     </View>
    
//   );
// }
// const styles = StyleSheet.create({
//     root:{
//       // marginTop:10,
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//       paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
//       // height:100*vh,
//     },
//     bottomView:{
//       width: '100%', 
//       height: 50, 
//       backgroundColor: '#FF9800', 
//       justifyContent: 'center', 
//       alignItems: 'center',
//       position: 'absolute',
//       bottom: 0
//     },

//     hero:{
//         // flex: 1,
//         backgroundColor:"red",
//     }
//   });


export default function Login() {
  return (
    <View style={styles.loginRoot}>
      <StatusBar style={{backgroundColor:'midnightblue'}}/>
      {/* <ScrollView> */}
        <ImageBackground style={styles.hero} source={require('./../images/hero-image.png')}>
            <Text>Trime</Text>
        </ImageBackground>
        <View>

          <Text>Email</Text>
          
          <TextInput placeholder="Enter email"/>
          <Text>Password</Text>
          <TextInput secureTextEntry={true} placeholder="Enter password"/>
          <Text>Forgot password?</Text>
          <View>
            <Button 
            title="Sign in"
            onPress={() => Alert.alert('Sign in pressed!')}/>
            <Button
              title="Sign up"
              onPress={() => console.log('Sign up pressed!')}/>
            
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

      paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },

    hero:{
        flex: 1,
        backgroundColor:"red",
    }
  });