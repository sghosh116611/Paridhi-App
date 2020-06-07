import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Homepage from "../screens/homepage";
import DomainList from "../screens/domainlist";
import Event from "../screens/event";
import Favourites from "../screens/favourites";

import Colors from "../constants/colors";


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// const drawerNavigation = props => {
//     return( 
//     <NavigationContainer>
//         <Drawer.Navigator>
//             <Drawer.Screen name="Home" component={Homepage} />
//             <Drawer.Screen name="Domain" component={DomainList} />
//             <Drawer.Screen name="Event" component={Event} />
//             <Drawer.Screen name="Favourites" component={Favourites} />
//         </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

const AppNavigation = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                headerStyle: {
                    backgroundColor:Colors.secondary,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
                },
            }}>
                <Stack.Screen name = "Home" component = {Homepage} />
                <Stack.Screen name = "Domain" component = {DomainList} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default AppNavigation;