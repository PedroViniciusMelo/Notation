import React from 'react';
import BarraSuperior from '../../Recursos/BarraSuperior/Index'
import {View,TouchableOpacity} from "react-native";
import {Feather} from "@expo/vector-icons";
import Estilos from './Style'

export default function home(){
    return(
        <View style={Estilos.container}>
            <BarraSuperior conteudo='Atividades' valor='false'/>
            <View style={Estilos.containerAtividades}>

            </View>
            <TouchableOpacity style={Estilos.btn} onClick={()=>{}}>
                <Feather name='plus' size={50} color='white'/>
            </TouchableOpacity>

        </View>

    )
}
