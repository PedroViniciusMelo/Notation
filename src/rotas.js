import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator} from "@react-navigation/drawer";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

//Estilo do Drawer
import CustomDrawer from './Recursos/CustomDrawer'

//Telas do Drawer
import Calendario from './Telas/Calendário'
import Historico from './Telas/Histórico'
import SobreApp from './Telas/SobreApp/Index'

//Stack Navigator
import NovaAtividade from './Telas/NovaAtividade';
import Atividades from './Telas/Atividades';
import VisualizarAtividade from './Telas/VisualizarTarefa/Index'

export default function Rotas(){

    return(
    <NavigationContainer>
      <Drawer/>
    </NavigationContainer>
    )
}


function Drawer(){
    const SideBar = createDrawerNavigator();

        function getHeaderTitle(route) {
        const routeName = getFocusedRouteNameFromRoute(route)

        switch (routeName){
            case 'CriarNovaAtividade':
                return false
            case 'VisualizarAtividade':
                return false
            default:
                return true
        }
    }

    return (
        <SideBar.Navigator 
            drawerContent={(props) => <CustomDrawer {...props} />}
            >
            <SideBar.Screen name={'main'} component={StackNavigator} options={({route}) => ({
                gestureEnabled: getHeaderTitle(route)
            })}/>
            <SideBar.Screen name={'Calendário'} component={CalendarNavigator} options={({route}) => ({
                gestureEnabled: getHeaderTitle(route)
            })}/>
            <SideBar.Screen name={'Histórico'} component={HistoryNavigator} options={({route}) => ({
                gestureEnabled: getHeaderTitle(route)
            })}/>
            <SideBar.Screen name={'Sobre o App'} component={SobreApp} />
        </SideBar.Navigator>
    )

}

function StackNavigator(){
    const { Navigator, Screen } = createStackNavigator();
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name='Atividades' component={Atividades} />
            <Screen name='CriarNovaAtividade' component={NovaAtividade}/>
            <Screen name='VisualizarAtividade' component={VisualizarAtividade}/>
            <Screen name='Calendário' component={Calendario}/>
        </Navigator>
    )
}

function CalendarNavigator(){
    const { Navigator, Screen } = createStackNavigator();
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name='Calendário' component={Calendario} options={{headerShown: false}}/>
            <Screen name='VisualizarAtividade' component={VisualizarAtividade}/>
        </Navigator>
    )
}

function HistoryNavigator(){
    const { Navigator, Screen } = createStackNavigator();
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name='Histórico' component={Historico}/>
            <Screen name='VisualizarAtividade' component={VisualizarAtividade}/>
        </Navigator>
    )
}
