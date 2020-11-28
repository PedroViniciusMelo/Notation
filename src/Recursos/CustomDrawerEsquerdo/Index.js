import { View } from "react-native";
import React from "react";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import DrawerSection from "react-native-paper/src/components/Drawer/DrawerSection";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Estilos from './Styles';
import LogoSvg from '../../../assets/Logo/Logo.svg';
import Atividades from "../../Telas/Atividades/Index";
import Calendario from '../StackNavigatorCalendario/Index';
import SobreApp from "../../Telas/SobreApp/Index";
import StackNavigator from '../StackNavigator/Index';
import Historico from '../../Telas/Histórico/Index';
import DrawerNavigatorDireito from '../CustomDrawerDireito/Index';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

export default function Drawer() {
    const SideBar = createDrawerNavigator();

    function getHeaderTitle(route) {
        const routeName = getFocusedRouteNameFromRoute(route)

        switch (routeName){
            case 'CriarNovaAtividade':
                return false
            case 'VisualizarAtividade':
                return false
            case 'Atividades':
                return true
            case 'Calendário':
                return true
        }
    }
    return (
        <SideBar.Navigator drawerContent={(props) => <CustomDrawerNavigator {...props} />}>
            <SideBar.Screen name={'main'} component={StackNavigator} options={({route}) => ({
                gestureEnabled: getHeaderTitle(route)
            })}/>
            <SideBar.Screen name={'Calendário'} component={Calendario} options={({route}) => ({
                gestureEnabled: getHeaderTitle(route)
            })}/>
            <SideBar.Screen name={'Histórico'} component={Historico} />
            <SideBar.Screen name={'Sobre o App'} component={SobreApp} />
        </SideBar.Navigator>
    )

    function CustomDrawerNavigator(props) {
        return (
            <View style={Estilos.container}>
                <View style={Estilos.logo}>
                    <LogoSvg />
                </View>
                <DrawerSection>
                    <DrawerItem
                        label={'Atividades'}
                        icon={() => (<Icon name='ballot-outline' color={'black'} size={35} />)}
                        onPress={() => { props.navigation.navigate('Atividades') }}
                        style={Estilos.divisoes}
                    />
                    <DrawerItem
                        label={'Calendário'}
                        icon={() => (<Icon name='calendar' color={'black'} size={35} />)}
                        onPress={() => { props.navigation.navigate('Calendário') }}
                        style={Estilos.divisoes}
                    />
                    <DrawerItem
                        label={'Histórico'}
                        icon={() => (<Icon name='history' color={'black'} size={35} />)}
                        onPress={() => { props.navigation.navigate('Histórico') }}
                        style={Estilos.divisoes}
                    />
                    <DrawerItem
                        label={'Sobre o App'}
                        icon={() => (<Icon name='developer-board' color={'black'} size={35} />)}
                        onPress={() => { props.navigation.navigate('Sobre o App') }}
                        style={Estilos.divisoes}
                    />
                </DrawerSection>
            </View>
        )
    }
}
