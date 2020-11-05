import React from 'react';
import BarraSuperior from '../BarraSuperior';
import {View, TouchableOpacity, Text} from 'react-native';
import {Feather} from '@expo/vector-icons';
import Estilos from './Style';


export default function Index(){
    return (
        <View style={Estilos.mainView}>
            <BarraSuperior valor='false' conteudo='Visualizar'/>
            <View  style={Estilos.secondaryView}>

            </View>
            <TouchableOpacity style={Estilos.Btn1}>
                <Feather name='check' size={30} color='white' style={{left: 15}}/>
                <Text style={Estilos.txtBtn1}>Marcar como concluida</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilos.Btn2}>
                <Feather name='trash-2' size={30} color='white' style={{left: 15}}/>
                <Text style={Estilos.txtBtn2}>Deletar tarefa</Text>
            </TouchableOpacity>
        </View>
    )
}

