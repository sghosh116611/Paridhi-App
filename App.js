import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Fonts from "expo-font";

import AppNavigation from "./navigation/AppNavigation";
import { AppLoading } from 'expo';

const fetchfonts = () => {
  return Fonts.loadAsync({
    Literal_regular : require("./assets/fonts/Literal_Regular(Personaluse).otf"),
    SF_Trans : require("./assets/fonts/SFTransRoboticsItalic.ttf"),
    Batman: require("./assets/fonts/batmfa__.ttf")
  });
};

export default function App() {
  const [loading, setLoading] = useState(false);

  if(!loading)
  {
    return <AppLoading startAsync = {fetchfonts} onFinish = {() => setLoading(true)} onError = {err => console.log(err)}/>
  }

  return (
    <AppNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
