import React from "react";
import {View,Text,StyleSheet,FlatList} from "react-native";
import {useSelector} from "react-redux";
import {Container,Content} from "native-base";

import EventCard from "../components/EventCard";

import Colors from "../constants/colors";

const EventList = props => {

    const domainId = props.route.params.domainId;
    console.log(domainId);
    
    const totalEvents = useSelector(state => state.eventReducer.events);
    const displayedEvents = totalEvents.filter(event => event.domainId == domainId );

    return (
    <Container style = {styles.container}>
       
            
            <FlatList
                data={displayedEvents}
                renderItem={({ item }) => <EventCard navigation={props.navigation} event = {item}/>}
                // keyExtractor={item => +item.id}
            />
    </Container> );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        // alignItems: "center",
        backgroundColor: Colors.primary,
    },
});

export default EventList;