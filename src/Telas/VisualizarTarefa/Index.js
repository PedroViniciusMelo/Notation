import React from 'react';
import BarraSuperior from '../../Recursos/BarraSuperior/Index';
import { View, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Estilos from './Style';
import normalizador from "../../Recursos/normalizador";
import { useNavigation, DrawerActions } from '@react-navigation/native'


export default function Index() {

    const Navigation = useNavigation()
    return (
        <View style={Estilos.mainView}>
            <BarraSuperior
                valor={false}
                conteudo='Visualizar'
                onPress={() => Navigation.dispatch(DrawerActions.openDrawer())} />
            <View style={Estilos.secondaryView}>
            </View>
            <TouchableOpacity style={Estilos.Btn1}>
                <Feather name='check' size={normalizador.widthPercentageToDP('4%')} color='white' style={{ left: '15%' }} />
                <Text style={Estilos.txtBtn1}>Marcar como concluida</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilos.Btn2}>
                <Feather name='trash-2' size={normalizador.widthPercentageToDP('4%')} color='white' style={{ left: '15%' }} />
                <Text style={Estilos.txtBtn2}>Deletar tarefa</Text>
            </TouchableOpacity>
        </View>
    )
}

