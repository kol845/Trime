import React from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Button, Alert, ImageBackground,Image } from 'react-native';

import FeedBackgroundRight from './../images/svg/FeedBackgroundRight'
import FeedBackgroundMain from './../images/svg/FeedBackgroundMain'
import FeedButtons from './../components/FeedButtons'
import Calender from './../images/svg/icon/Calender'
import Health from './../images/svg/icon/Health'
import Chat from './../images/svg/icon/Chat'
import FeedPageWave from './../images/svg/FeedPageWave'
import Pen from './../images/svg/icon/Pen'
import FeedCard from './../components/FeedCard'
import FeedBottomGgLeft from './../images/svg/FeedBottomGgLeft'
import FeedBottomBgRight from './../images/svg/FeedBottomBgRight'
import FeedTopWave from './../images/svg/FeedTopWave'


export default function Feed() {
    return (
       <View>

           <View style={styles.headerContainer}>

        
               <FeedBackgroundRight style={styles.bgTopRight}/>
               <FeedBackgroundMain style={styles.mainBg}/>
               <FeedPageWave style={styles.wave}/>
               <FeedTopWave style={{position:'absolute',top:149,left:0}}/>
               <View>
                    <Text style={styles.text} >Trime</Text>
                    <Image source={require('./../images/profilepic.png')} style={{top:12}}/>
                    
                    
               </View>
               

           </View>

        <View style={styles.brow}>

              <FeedButtons name='Eliza' image={<Pen/>}/>
              <FeedButtons name='BOOK' image={<Calender/>}/>
              <FeedButtons name='HEALTH' image={<Health/>}/>
              <FeedButtons name='CHAT' image={<Chat/>}/>

        </View>

        <View style={styles.card}>
              <FeedCard url={require('./../images/trainer1.png')}/> 
              <FeedCard url={require('./../images/trainer2.png')}/> 
              <FeedCard url={require('./../images/trainer3.png')}/> 
              <FeedCard url={require('./../images/trainer4.png')}/>   
              
        </View>

        <View style={{flexDirection:'row'}}>
             <FeedBottomGgLeft style={styles.bottomBg}/>
             <FeedBottomBgRight style={styles.bottomBgRight}/>
        </View>
       
        

    </View>
       
    );
}

const styles = StyleSheet.create({
    bgTopLeft:{
         position:'absolute',
         zIndex:-1
    },
    bgTopRight:{
        position:'absolute',
        zIndex:-1,
        right:0
   },
   smallText:{
      color:'#fff',
      marginTop:5,
      textAlign:'center',
      
   },
   sm:{
      color:'#fff',
      marginLeft:40
   },
    headerContainer: {
        flexDirection:'row',
      
    },
    mainBg: {
        ...StyleSheet.absoluteFillObject,
        
    },
    wave:{
        position: 'absolute',
        zIndex:-1,
        marginTop:155
    },
    brow:{
        marginTop:8,
        marginBottom:20,
        flexDirection:'row', 
        justifyContent:'space-around',
        backgroundColor:'rgba(255,255,255,0.7)',
        padding:7,
        borderRadius:7,
        marginHorizontal:3,
        shadowColor: "#000",
        shadowOffset: {
	       width: 0,
	       height: 3,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4
    },
    card:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
       
        
    },
    bottomBg:{
        position:'absolute',
        zIndex:-3,
        bottom:-28,
        

    },
    bottomBgRight:{
        position:'absolute',
        zIndex:-3,
        bottom:-28,
        right:0
    },
    text: {
        // fontFamily:'helvetica',
         marginTop:50,
         marginLeft:10,
         fontSize: 40,
         color:'#D58258',
         fontWeight:'700',
         textAlign:'center',
         paddingHorizontal:30,
         marginBottom:40,
         backgroundColor:'rgba(255,255,255,0.1)',
         borderRadius:9
       
         
         
   
       }
  });