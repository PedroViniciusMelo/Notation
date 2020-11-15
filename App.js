import React from 'react';
import {useFonts} from 'expo-font';
import {NavigationContainer} from "@react-navigation/native";
import {Poppins_600SemiBold, Poppins_700Bold, Poppins_400Regular, Poppins_800ExtraBold} from '@expo-google-fonts/poppins';
import DrawerNavigator from './src/Recursos/CustomDrawerEsquerdo/Index';

export default function App() {
  
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_800ExtraBold
  });
 
  if (!fontsLoaded) {
      return null;
  }

  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
};

