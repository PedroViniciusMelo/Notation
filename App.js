import React from 'react';
import {useFonts} from 'expo-font';
import {Poppins_600SemiBold, Poppins_700Bold, Poppins_400Regular, Poppins_800ExtraBold} from '@expo-google-fonts/poppins';
import Rotas from "./src/rotas";

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
    <Rotas/>
  );
};

