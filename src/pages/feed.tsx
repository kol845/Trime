import React from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Button, Alert, ImageBackground } from 'react-native';
import FeedBackground from './../images/svg/FeedBackground'
import FeedBackgroundRight from './../images/svg/FeedBackgroundRight'
import FeedBackgroundMain from './../images/svg/FeedBackgroundMain'
import FeedButtons from './../components/FeedButtons'
import Calender from './../images/svg/icon/Calender'
import Health from './../images/svg/icon/Health'
import Chat from './../images/svg/icon/Chat'
export default function Feed() {
    return (
       <View>
           <View>
           <FeedBackground/>
           <FeedBackgroundRight/>
           <FeedBackgroundMain style={{
                            position: 'absolute',
                            zIndex:-1
                        }}/>
           </View>
           <View style={{flexDirection:'row', flexWrap:'wrap'}}>
          <FeedButtons name='Eliza' image={<Calender/>}/>
          <FeedButtons name='BOOK' image={<Calender/>}/>
          <FeedButtons name='HEALTH' image={<Health/>}/>
          <FeedButtons name='CHAT' image={<Chat/>}/>
           </View>
           
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    hero:{
        backgroundColor:"red",
    }
  });