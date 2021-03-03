import React from 'react';
import { StyleSheet, Text,View,Image } from 'react-native';



const FeedCard = () => {
    return (

          <View style={styles.card}>
              
              <Text> hello</Text>

          </View>
        );
    

}
const styles = StyleSheet.create({
      card:{
        marginVertical:15,
        backgroundColor:'#fff',
        width:150,
        borderRadius:10,
        height:200,
        shadowColor: "#000",
        shadowOffset: {
	       width: 0,
	       height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        


      }
})
export default FeedCard;