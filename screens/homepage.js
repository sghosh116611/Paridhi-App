import React,{useState} from "react";
import {View,ScrollView,StyleSheet,Image} from 'react-native';
import {Container,Content,Text,Footer} from "native-base";
import CountDown from 'react-native-countdown-component';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Colors from "../constants/colors";

const Homepage = props => {
    return(
        <ScrollView>
            <Container style={styles.container}>
                <Content padder>
                    <View style={styles.imagecontainer}>
                        <Image style={styles.image} source = {require("../assets/P.png")} />
                    </View>
                    <View style={styles.textcontainer}>
                        <Text style={styles.bodytext}>PARIDHI {new Date().getFullYear()}</Text>
                    </View>
                    <View style={styles.coutndown}>
                    <CountDown
                        size={25}
                        until={5,259,492}
                        onFinish={()=> {}}
                        digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: "#2a3439"}}
                        digitTxtStyle={{color: '#1CC625'}}
                        timeLabelStyle={{color: "white", fontWeight: 'bold'}}
                        separatorStyle={{color: '#1CC625'}}
                        timeToShow={['D','H', 'M', 'S']}
                        timeLabels={{d: 'Days', h: 'Hours', m: 'Minutes', s: 'Seconds'}}
                        showSeparator
                    />
                    </View>
                </Content>
            </Container>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary,
    },
    imagecontainer:{
        height: 200,
        width: 200,
        alignItems: "center",
        justifyContent: "center",
        margin: 50,
        padding: 2
    },
    image:{
        height: "100%",
        width : "100%",
    },
    textcontainer:{
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 50
    },
    bodytext:{
        color: "white",
        fontSize: 32,
        fontFamily: "Batman"
    },
});

export default Homepage;