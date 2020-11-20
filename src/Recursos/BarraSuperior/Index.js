import React from 'react';
import { Text, View, TouchableOpacity } from "react-native";
import Estilos from "./Styles";
import Barra from "../../../assets/Barra/Barra.svg";
import Categorias from "../../../assets/Barra/Categorias.svg";


export default function (props) {
    return (
        <View style={Estilos.container}>
            <TouchableOpacity onPress={props.onPress}>
                <Barra/>
            </TouchableOpacity>
            <Text style={Estilos.text}>{props.conteudo}</Text>
            {props.valor ? <Categorias/> : <View />/*Ternário para definir se será usado o ícone de filtros*/}
        </View>
    )
}
