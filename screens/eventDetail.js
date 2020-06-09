import React from "react";
import {StyleSheet,Text} from "react-native";
import { Container,Content } from "native-base";

import Colors from "../constants/colors";

const EventDetail = props => {
    return(
        <Container style = {styles.container}>
            <Content>
                <Text style = {styles.cardText}>
                    {props.route.params.description}
                </Text>
            </Content>
        </Container>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        // alignItems: "center",
        backgroundColor: Colors.primary,
    },
    cardText:{
        color: "white",
        fontSize: 36,
        fontFamily: "ExtraSerif",

    },
});

export default EventDetail;