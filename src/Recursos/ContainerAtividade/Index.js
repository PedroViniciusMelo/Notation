import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Feather} from "@expo/vector-icons";
import normalizador from "../normalizador";
import Estilos from './Styles'

export default function Container(props){
    return(
        <View style={Estilos.container}>
            <View style={Estilos.view1}>
                <Text style={Estilos.texto}>{props.titulo}</Text>
            </View>
            <View style={Estilos.containerS}>
                <View style={Estilos.categoria}>
                    <Text style={Estilos.textoCategoria}>{props.categoria}</Text>
                </View>
                <View style={Estilos.data}>
                    <Feather name='calendar' color='black' size={normalizador('width','5%')}/>
                    <Text style={Estilos.textoData}>{props.data}</Text>
                </View>
            </View>
        </View>
    )
}


