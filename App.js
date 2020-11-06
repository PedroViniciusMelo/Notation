import React from 'react';
import {useFonts} from 'expo-font';
import {NavigationContainer} from "@react-navigation/native";
import {Poppins_600SemiBold, Poppins_700Bold, Poppins_400Regular, Poppins_800ExtraBold} from '@expo-google-fonts/poppins';
import SplashScreen from './src/SplashScreen/Index';
import NewActivity from './src/NewActivity/Index';
import Home from  './src/Home/Index';
import ViewActivity from  './src/ViewActivity/Index';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import {View, Text, StyleSheet} from "react-native";
import DrawerSection from "react-native-paper/src/components/Drawer/DrawerSection";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


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
  function CustomDrawerNavigator(props){
    return(
        <View style={{flex: 1}}>
          <DrawerContentScrollView {...props} style={{backgroundColor: '#0085FF'}}>
            <DrawerSection>
                <View style={{justifyContent: 'center', alignItems: 'center', borderRadius: 20, elevation: 10, backgroundColor: 'white', alignSelf: 'center', width: '80%'}}>
                    <Text style={{fontFamily: 'Poppins_700Bold', fontSize: 60}}>N<Text style={{fontSize: 40}}>otation</Text></Text>
                </View>
            </DrawerSection>
            <DrawerSection {...props}>
              <DrawerItem
                  label={'Atividades'}
                  icon={({color, size}) => (
                      <Icon
                          name='ballot-outline'
                          color={color}
                          size={size}
                          />
                  )}
                  onPress={()=>{props.navigation.navigate('Atividades')}}
                  style={styles.divisoes}
              />
              <DrawerItem
                  label={'Calendário'}
                  icon={({color, size}) => (
                      <Icon
                          name='calendar'
                          color={color}
                          size={size}
                      />
                  )}
                  onPress={()=>{props.navigation.navigate('Calendário')}}
                  style={styles.divisoes}
              />
              <DrawerItem
                  label={'Histórico'}
                  icon={({color, size}) => (
                      <Icon
                          name='history'
                          color={color}
                          size={size}
                      />
                  )}
                  onPress={()=>{props.navigation.navigate('Histórico')}}
                  style={styles.divisoes}
              />
              <DrawerItem
                  label={'Sobre o App'}
                  icon={({color, size}) => (
                      <Icon
                          name='developer-board'
                          color={color}
                          size={size}
                      />
                  )}
                  onPress={()=>{props.navigation.navigate('Sobre o App')}}
                  style={styles.divisoes}
              />
            </DrawerSection>
          </DrawerContentScrollView>
        </View>
        )
  }

  const SideBar = createDrawerNavigator();
  const styles = StyleSheet.create({
      divisoes : {
          backgroundColor: 'white',
          borderRadius: 20,
          fontSize: 40,
          marginTop: 10
      }

  })

  function DrawerNavigator(){
    return(
        <SideBar.Navigator drawerContent={(props) => <CustomDrawerNavigator {...props}/>}>
          <SideBar.Screen name={'Atividades'} component={Inicio}/>
          <SideBar.Screen name={'Calendário'} component={Cadastro}/>
          <SideBar.Screen name={'Histórico'} component={Principal}/>
          <SideBar.Screen name={'Sobre o App'} component={tarefas}/>
        </SideBar.Navigator>
    )

  }
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
};

