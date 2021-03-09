import React from 'react';
import { View, StyleSheet, Text, Modal } from 'react-native';
import { Dimensions, TouchableOpacity } from 'react-native';

import InfoIcon from "../../images/svg/icon/InfoIcon";
import SmallBtn from "./../SmallBtn"

const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;

const primary300 = '#E2A88A'

// call like this:
// <InfoModal visible={ptInfoVisible} closeFunc={()=>setPtInfoVisible(!ptInfoVisible)}>
// Answer the questions so we can give you the best recommendations on PT’s just for you!{"\n"}{"\n"}
// You can also fill it in on your profile later on. 
// </InfoModal>

export default function InfoModal(props: { children:string[], visible: boolean, closeFunc:Function }) {

    return(
      <Modal visible={props.visible} transparent={true}>
        <View style={styles.modalBG}>
          <View style={[styles.centeredView, styles.flex]}>
            <View style={styles.modalView}>
              <View style={styles.centeredView}>
              <InfoIcon/>
              <Text style={styles.modalText}>{props.children}</Text>
              </View>
              <View style={styles.buttonContainer}>
                <SmallBtn text="Ok" onPress={props.closeFunc}/>
              </View>
            </View>

          </View>
        </View>
      </Modal>

    )
}
const styles = StyleSheet.create({
    modalBG:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.5)',
    },
    flex:{
      flex:1,
    },
    centeredView: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 6
      },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      // alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    buttonContainer:{
      alignItems:"flex-end",
      marginBottom:6,
    },
    button: {
      
      borderRadius: 6,
      paddingHorizontal:12,
      paddingVertical:6,
      elevation: 2
    },

    buttonClose: {
      
      backgroundColor: primary300,
      
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });