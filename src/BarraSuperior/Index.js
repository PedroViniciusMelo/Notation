import React from 'react';
import {Text, View} from "react-native";
import Estilos from "./Styles";
import Barra from "../../assets/Barra/Barra.svg";
import Categorias from "../../assets/Barra/Categorias.svg";



export default function (props){
    if (props.valor === 'false'){
        return(
        <View style={Estilos.secondaryView}>
            <Barra style={Estilos.barra}/>
            <Text style={Estilos.text}>{props.conteudo}</Text>
        </View>
        )
    }else{
        return (
            <View style={Estilos.secondaryView}>
                <Barra style={Estilos.barra}/>
                <Text style={Estilos.text}>{props.conteudo}</Text>
                <Categorias style={Estilos.categorias}/>
            </View>
        )
    }
}
