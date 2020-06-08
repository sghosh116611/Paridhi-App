import React from "react";
import {StyleSheet,Text,View} from "react-native";
import { Card, CardItem, Body } from "native-base";

import Colors from "../constants/colors";
import { TouchableOpacity, TouchableNativeFeedback } from "react-native-gesture-handler";

const CustomCard = props => {

    const onPressNavigate = () => props.navigation.navigate("Event",{
        title:props.title,
        domainId: props.domainId,
    });

    return(
        <TouchableOpacity onPress = {onPressNavigate}>
        <Card style={styles.cardContainer}>
            <CardItem style = {styles.cardItem}>
                <Body style = {styles.cardBody}>
                    <View style={styles.textcontainer}>
                        <Text style={styles.cardText}>
                            {props.title.toUpperCase()}
                        </Text>
                    </View>
                </Body>
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
    textcontainer:{
        justifyContent:"center",
        alignItems:"center",
        width:"100%"
    },
    cardText:{
        color: "white",
        fontSize: 28,
        fontFamily: "ExtraSerif",

    },
});

export default CustomCard;