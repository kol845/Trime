import React from 'react';
import { StyleSheet,View,Image } from 'react-native';



const FeedCard = ({url}) => {
    return (

          <View style={styles.card}>
              
            <Image source={url}/>

          </View>
        );
    

}
const styles = StyleSheet.create({
      card:{
        marginVertical:15,
         


      }
})
export default FeedCard;