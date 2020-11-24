import { View } from "react-native";
import React from "react";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import DrawerSection from "react-native-paper/src/components/Drawer/DrawerSection";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Estilos from './Styles';
import LogoSvg from '../../../assets/Logo/Logo.svg';
import Atividades from "../../Telas/Atividades/Index";
import Calendario from '../../Telas/Calendário/Index';
import SobreApp from "../../Telas/SobreApp/Index";
import StackNavigator from '../StackNavigator/Index';
import Historico from '../../Telas/Histórico/Index';

export default function Drawer() {
    const SideBar = createDrawerNavigator();
    return (
        <SideBar.Navigator drawerContent={(props) => <CustomDrawerNavigator {...props} />}>
            <SideBar.Screen name={'main'} component={StackNavigator} />
            <SideBar.Screen name={'Atividades'} component={AtividadesF} />
            <SideBar.Screen name={'Calendário'} component={CalendarioF} />
            <SideBar.Screen name={'Histórico'} component={HistoricoF} />
            <SideBar.Screen name={'Sobre o App'} component={SobreAppF} />
        </SideBar.Navigator>
    )
    //Rotas das aplicações
    function AtividadesF() {
        return (
            <Atividades/>
        )
    }
    function SobreAppF() {
        return (
            <SobreApp/>
        )
    }
    function HistoricoF() {
        return (
            <Historico/>
        )
    }
    function CalendarioF() {
        return (
            <Calendario/>
        )
    }

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
