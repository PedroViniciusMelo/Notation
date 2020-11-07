import React from 'react';
import {useFonts} from 'expo-font';
import {NavigationContainer} from "@react-navigation/native";
import {Poppins_600SemiBold, Poppins_700Bold, Poppins_400Regular, Poppins_800ExtraBold} from '@expo-google-fonts/poppins';
import SplashScreen from './src/Telas/TelaDeInicio/Index';
import NewActivity from './src/Telas/NovaAtividade/Index';
import Home from './src/Telas/SobreApp/Index';
import ViewActivity from './src/Telas/VisualizarTarefa/Index';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import {View, Text, StyleSheet} from "react-native";
import DrawerSection from "react-native-paper/src/components/Drawer/DrawerSection";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Inicio1 from './src/Telas/Atividades/Index';
import CustomDrawer from './src/Recursos/CustomDrawerEsquerdo/Index'
import DrawerNavigator from './src/Recursos/CustomDrawerEsquerdo/Index'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_800ExtraBold
  });

  if (!fontsLoaded){
      return null;
  }

  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
};

