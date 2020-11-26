import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import DrawerSection from "react-native-paper/src/components/Drawer/DrawerSection";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Estilos from './Styles';
import Atividades from "../../Telas/Atividades/Index";
import StackNavigator from '../StackNavigator/Index';
import normalizador from "../normalizador";

export default function Drawer() {
    const SideBar = createDrawerNavigator();
    return (
        <SideBar.Navigator drawerPosition="right" drawerContent={(props) => <CustomDrawerNavigator {...props} />}>
            <SideBar.Screen name={'main'} component={StackNavigator} />
            <SideBar.Screen name={'Atividades'} component={AtividadesF} />
            <SideBar.Screen name={'Calendário'} component={AtividadesF} />
            <SideBar.Screen name={'Histórico'} component={AtividadesF} />
        </SideBar.Navigator>
    )
    
    //Rotas das aplicações
    function AtividadesF() {
        return (
            <Atividades/>
        )
    }

    function CustomDrawerNavigator(props) {
        return (
            <View style={Estilos.container}>
                <View style={Estilos.logo}>
                    <Text style={{fontSize: normalizador.widthPercentageToDP('5%'), fontFamily: 'Poppins_700Bold'}}>Filtrar por: </Text>
                </View>
                <DrawerSection>
                    <DrawerItem
                        label={'Categoria'}
                        icon={() => (<Icon name='ballot-outline' color={'black'} size={35} />)}
                        onPress={() => { props.navigation.navigate('Atividades') }}
                        style={Estilos.divisoes}
                    />
                    <DrawerItem
                        label={'Data'}
                        icon={() => (<Icon name='calendar' color={'black'} size={35} />)}
                        onPress={() => { props.navigation.navigate('Calendário') }}
                        style={Estilos.divisoes}
                    />
                    <DrawerItem
                        label={'Atrasados'}
                        icon={() => (<Icon name='clock-alert-outline' color={'black'} size={35} />)}
                        onPress={() => { props.navigation.navigate('Histórico') }}
                        style={Estilos.divisoes}
                    />
                </DrawerSection>
            </View>
        )
    }
}
