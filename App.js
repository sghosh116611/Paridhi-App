import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Fonts from "expo-font";
import { AppLoading } from 'expo';
import {createStore,combineReducers} from "redux";
import {Provider} from "react-redux";

import AppNavigation from "./navigation/AppNavigation";
import eventReducer from "./store/reducer/eventReducer";

const rootReducer = combineReducers({
    eventReducer: eventReducer,
})

const store = createStore(rootReducer);

const fetchfonts = () => {
    return Fonts.loadAsync({
        Literal_regular: require("./assets/fonts/Literal_Regular(Personaluse).otf"),
        SF_Trans: require("./assets/fonts/SFTransRoboticsItalic.ttf"),
        Batman: require("./assets/fonts/batmfa__.ttf"),
        Pineforest: require("./assets/fonts/Pineforest.ttf"),
        ExtraSerif: require("./assets/fonts/EXTRASerif-Regular.ttf"),
    });
};

export default function App() {
    const [loading, setLoading] = useState(false);

    if (!loading) {
        return <AppLoading startAsync = { fetchfonts }
        onFinish = {
            () => setLoading(true)
        }
        onError = { err => console.log(err) }
        />
    }

    return ( 
        <Provider store={store}>
            <AppNavigation/>
        </Provider>
    );
}