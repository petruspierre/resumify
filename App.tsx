import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Dosis_500Medium, Dosis_700Bold } from '@expo-google-fonts/dosis';
import {
  Quicksand_300Light,
  Quicksand_500Medium,
  Quicksand_400Regular,
  useFonts,
} from '@expo-google-fonts/quicksand';
import * as SplashScreen from 'expo-splash-screen';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Dosis_500Medium,
    Dosis_700Bold,
  });

  useEffect(() => {
    async function keepSplash() {
      await SplashScreen.hideAsync();
    }

    keepSplash();
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}
