import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import HeroTopWave from './../images/svg/HeroTopWave';
import HeroWave from '../images/svg/HeroWave';
import globals from "./../utils/globals"

const vh = Dimensions.get('window').height/100;




const Hero = (props:{ isSignup?:boolean}) => {
  
    return( 
    
      <View>
         <ImageBackground  style={(props.isSignup ? styles.lessHeight: styles.height)} source={require('./../images/hero-image.png') }>
         <HeroTopWave style={styles.topWave}/>
          <View>
            <Text style={(props.isSignup ? styles.altText: styles.text)} >Trime</Text>
          </View>
         </ImageBackground>
         <HeroWave style={(props.isSignup ? styles.higherWave: styles.wave)}/>
    </View>
    )
  };
 
  const styles = StyleSheet.create({
    text: {
      marginLeft:30,
      marginRight:30,
      fontSize: 60,
      color: globals.colors.primary,
      fontWeight:'900',
      textAlign:'center',
      marginTop:vh*16,
      backgroundColor:'rgba(85, 110, 116,0.9)',
      borderRadius:9
    },
    altText: {
      marginLeft:30,
      marginRight:30,
      fontSize: 60,
      color: globals.colors.primary,
      fontWeight:'900',
      textAlign:'center',
      marginTop:vh*8,
      backgroundColor:'rgba(85, 110, 116,0.9)',
      borderRadius:9
    },
    height: {
      height:vh*36,
      
      width:'100%',
      flex:1,
      resizeMode: "stretch",
      justifyContent: "center"
    },
    lessHeight: {
      
      height:vh*26,
      
      width:'100%',
      flex:1,
      resizeMode: "stretch",
      justifyContent: "center"

    },
    wave:{
      marginTop:vh*28,
      right:0
    },
    higherWave:{
      marginTop:vh*18,
    },
    topWave:{
      position:'absolute',
      left:0,
      right:0,
      
      
      transform: [
        { rotateX: "175deg" },
        { rotateY:"175deg"}
      
      ] ,
   
    }
  });
  
  export default Hero;