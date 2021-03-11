import React,{Component} from 'react';
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


import {  createBottomTabNavigator,createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Home from './../images/svg/nav-icons/Home';
//import  Icon  from 'react-native-vector-icons/FontAwesome';
import {Icon} from 'react-native-elements';




import Login from './login';

class Feed extends Component  {
   
    render() {
        console.log(Icon);
        return (

            <View>

                <View style={styles.headerContainer}>
     
             
                    <FeedBackgroundRight style={styles.bgTopRight}/>
                    <View style={styles.mainBg}>
                        <FeedBackgroundMain/>
                    </View>
                   
                    
                    <FeedPageWave style={styles.wave}/>
                    <View>
                         <Text style={styles.text} >Trime</Text>
                         <Image source={require('./../images/profilepic.png')} style={{top:40}}/>
                         
                         
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
        resizeMode: "cover"
        
        
    },
    wave:{
        position: 'absolute',
        zIndex:-1,
        marginTop:160,    },
    brow:{
        marginTop:35,
        marginBottom:20,
        flexDirection:'row', 
        justifyContent:'space-around',
        backgroundColor:'rgb(255,255,255)',
        padding:7,
        borderRadius:7,
        shadowColor: "#000",
        shadowOffset: {
	       width: 2,
	       height: 5,
        },
        shadowOpacity: 0.33,
        shadowRadius: 2.62,
        elevation: 7
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
  const TabNavigator=createMaterialBottomTabNavigator(
    {
        FeedPage:{
            screen:Feed,
            navigationOptions:{
            
                tabBarIcon:()=>(
                    <View>
                         <Icon  name={'home'} size={25} style={{color:'#555555'}} />
                    </View>
                )
            }
        },
        LoginPage:{
            screen:Login,
            navigationOptions:{
               
                tabBarIcon:()=>(
                    <View>
                      <Icon  name={'add-shopping-cart'} size={25} style={{color:'#555555'}} />
                    </View>
                )
            }
        }
    },
    {
        initialRouteName: 'FeedPage',
        activeColor: '#f0edf6',
        inactiveColor: '#226557',
        barStyle: { backgroundColor: '#fff' },
      }
);


export default createAppContainer(TabNavigator);