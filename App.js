import React from 'react';
import {useFonts} from 'expo-font';
import {NavigationContainer} from "@react-navigation/native";
import {Poppins_600SemiBold, Poppins_700Bold, Poppins_400Regular, Poppins_800ExtraBold} from '@expo-google-fonts/poppins';
import SplashScreen from './src/SplashScreen/Index';
import NewActivity from './src/NewActivity/Index';
import Home from  './src/Home/Index';
import ViewActivity from  './src/ViewActivity/Index';
import {createDrawerNavigator} from "@react-navigation/drawer";

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
  function Inicio(){
    return(
        <SplashScreen/>
    )
  }
  function Cadastro(){
    return(
        <NewActivity/>
    )
  }
  function Principal(){
    return(
        <Home/>
    )
  }
  function tarefas(){
    return(
        <ViewActivity/>
    )
  }

  const SideBar = createDrawerNavigator();

  function DrawerNavigator(){
    return(
        <SideBar.Navigator>
          <SideBar.Screen name={'Home'} component={Inicio}/>
          <SideBar.Screen name={'Atividades'} component={Cadastro}/>
          <SideBar.Screen name={'Todas as tarefas'} component={Principal}/>
          <SideBar.Screen name={'Ver atividades'} component={tarefas}/>
        </SideBar.Navigator>
    )

  }

  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
};

