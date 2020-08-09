import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { Dosis_500Medium, Dosis_700Bold } from '@expo-google-fonts/dosis';
import {
  Quicksand_300Light,
  Quicksand_500Medium,
  Quicksand_400Regular,
  useFonts,
} from '@expo-google-fonts/quicksand';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Dosis_500Medium,
    Dosis_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
