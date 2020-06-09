import React from "react";
import {StyleSheet,Image} from "react-native";
import {Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, View } from 'native-base';

import Colors from "../constants/colors"
import { TouchableOpacity } from "react-native-gesture-handler";

const EventCard = props => {
        return(
        <TouchableOpacity onPress = {() => props.navigation.navigate("EventDetail",{
            title: props.event.title,
            description: props.event.description,
            price: props.event.price
        })}>
        <Card style = {styles.cardContainer}>
            <CardItem style = {styles.cardItem}>
                <Left>
                    <Body>
                        <View style = {styles.cardIconContainer}>
                            <Image style = {styles.cardIcon} source = {require("../assets/robot.jpg")} />
                        </View>
                    </Body>    
                </Left>
                <Right>
                    <Body style={{justifyContent:"center",alignItems:"center"}}>
                        <View style = {styles.textcontainer}>
                            <Text style = {styles.cardText}>
                                {props.event.title.toUpperCase()}
                            </Text>
                        </View>
                    </Body>
                </Right>
            </CardItem>
        </Card>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer:{
        // flex:1,
        height:150,
        marginBottom: 30,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        borderWidth: 10000,
        borderColor:"#fff",
        backgroundColor: Colors.elevation,
        overflow:"hidden",
    },
    cardItem:{
        backgroundColor: Colors.secondary,
    },
    cardIconContainer: {
        backgroundColor: "white",
        height:100,
        width:"50%"
    },
    cardIcon:{
        width:"100%",
        height:"100%"
    },
    textcontainer:{
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        // backgroundColor: "pink"
    },
    cardText:{
        color: "white",
        fontSize: 36,
        fontFamily: "ExtraSerif",

    },
});

export default EventCard;