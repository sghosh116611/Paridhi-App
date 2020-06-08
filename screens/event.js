import React from "react";
import {View,Text,StyleSheet} from "react-native";

const EventList = props => {

    const domainId = props.route.params.domainId;
    

    return <View>
        <Text>{props.route.params.domainId}</Text>
    </View>
};

const styles = StyleSheet.create({

});

EventList.navigationOptions = (navigationData)  => {
    console.log(navigationData);
};

export default EventList;