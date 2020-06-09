import React from "react";
import {View,Image} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import {
    HeaderButtons,
    HeaderButton,
    Item,
    HiddenItem,
    OverflowMenu,
} from 'react-navigation-header-buttons';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Homepage from "../screens/homepage";
import DomainList from "../screens/domainlist";
import Event from "../screens/event";
import OnlineEvent from "../screens/onlineEvent";
import EventDetail from "../screens/eventDetail";
import Registration from "../screens/registration";

import Colors from "../constants/colors";


const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const DomainEventStack = createStackNavigator();
const OnlineStack = createStackNavigator();
const RegistrationStack = createStackNavigator();

const IoniconsHeaderButton = (props) => (
    <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color="white" />
  );

const defaultHeaderStyle = { 
    headerStyle: {
        backgroundColor:Colors.secondary,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
    // fontWeight: 'bold',
    fontFamily: "Batman"
    },
    headerRight: () => { 
        return(<View style = {{height: 50,width: 70,padding:2, justifyContent: "center", alignItems: "center"}}>
                    <Image style = {{width: "100%", height: "100%", margin: 10}} source = {require("../assets/megatronix_logowhite.png")} />
    </View>)},
    headerLeft: () => <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
        <Item title="menu" iconName="md-menu" onPress={() => {}} />
    </HeaderButtons>
};

const homeStack = props => {
    return(
        <HomeStack.Navigator 
        screenOptions={defaultHeaderStyle}>
            <HomeStack.Screen name = "Home" component = {Homepage} />
        </HomeStack.Navigator>
    );
};

const domainStack = props => {
    return (
        <DomainEventStack.Navigator screenOptions = {defaultHeaderStyle}>
            <DomainEventStack.Screen name = "Domain" component = {DomainList} />
            <DomainEventStack.Screen name = "Event" component = {Event} options= {
                ({route}) => ({title: route.params.title})
            }/>
            <DomainEventStack.Screen name = "EventDetail" component = {EventDetail} options = {
                ({route}) => ({title: route.params.title})
            } />
        </DomainEventStack.Navigator>
    );
};

const onlineStack = props => {
    return(
        <OnlineStack.Navigator screenOptions = {defaultHeaderStyle}>
            <OnlineStack.Screen name = "Online Events" component = {OnlineEvent} />
        </OnlineStack.Navigator>
    );
};

const registrationStack = props => {
    return(
        <RegistrationStack.Navigator screenOptions = {defaultHeaderStyle}>
            <RegistrationStack.Screen name = "Registration" component = {Registration} />
        </RegistrationStack.Navigator>
    );
}

const AppNavigation = props => {
    return( 
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={homeStack} />
            <Drawer.Screen name="Main Events" component={domainStack} />
            <Drawer.Screen name="Online Events" component={onlineStack} />
            <Drawer.Screen name="Registration" component={registrationStack} />

        </Drawer.Navigator>
    </NavigationContainer>
  );
};


export default AppNavigation;