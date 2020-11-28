import React from 'react';
import LogoSvg from './Logo/Index';
import { StyleSheet, View } from "react-native";
import DrawerSection from "react-native-paper/src/components/Drawer/DrawerSection";
import {  DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function CustomDrawer(props) {
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


    
const Estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0085FF',
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        elevation: 10,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop:3,
        width: '60%',
        height: '15%'
    },
    divisoes : {
        backgroundColor: 'white',
        borderRadius: 40,
        fontSize: 40,
        marginTop: '2%'
    }
})