import React from 'react';
import { Text, View, TouchableOpacity } from "react-native";
import Estilos from "./Styles";
import Barra from "../../../assets/Barra/Barra.svg";
import Categorias from "../../../assets/Barra/Categorias.svg";


export default function (props, { navigation }) {
    return (
        <View style={Estilos.secondaryView}>
            <TouchableOpacity onPress={props.onPress}>
                <Barra style={Estilos.barra} />
            </TouchableOpacity>
            <Text style={Estilos.text}>{props.conteudo}</Text>
            {props.valor ? <Categorias style={Estilos.categorias} /> : <View />/*Ternário para definir se será usado o ícone de filtros*/}
        </View>
    )
}
