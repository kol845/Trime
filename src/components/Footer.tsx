import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Dimensions } from 'react-native';

import SmallBtn from './SmallBtn'

import FooterPattern from './../images/svg/footer-pattern';
import FacebookIcon from "../images/svg/icon/FacebookIcon";
import GoogleIcon from "../images/svg/icon/GoogleIcon";

const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;

// Tool for making react-native svgs: https://transform.tools/svg-to-react-native
// Will contain: 1) ---or---, 2) bouble svg:s, 3) two social media icons

export default function Footer(props: { isSignUp: boolean }) {

    return(
        <View style={styles.footerContainer}>
            <View style={styles.orCountainer}>
                <View style={styles.horizontalLine}/>
                <Text>OR</Text>
                <View style={styles.horizontalLine}/>
            </View>

            <View style={styles.svgContainer}>
                <FooterPattern
                    style={styles.pattern}
                />
            </View>

            <View style={styles.iconContainer}>

                <FacebookIcon/>
                <GoogleIcon/>
            </View>
            <View style={styles.smlbtnContainer}>
                    { props.isSignUp && <SmallBtn text="Back"/>}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    footerContainer: {
        alignItems: 'center',
        marginBottom: 18
    },
    orCountainer:{
        width:90*vw,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
    },
    horizontalLine:{
        width:35*vw,
        height:2,
        backgroundColor:'black',
        opacity:0.1,
    },
    svgContainer:{
        marginBottom: 36
    },
    pattern:{
        position:'absolute',
        left:-80*vw,
        top:-70,
    },
    iconContainer:{
        width:100,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    smlbtnContainer:{
        marginLeft: 6,
        alignSelf:'flex-start',
    }

  });