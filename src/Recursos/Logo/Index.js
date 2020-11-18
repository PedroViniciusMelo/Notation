import React from 'react';
import Estilos from "./Styles";
import { View } from "react-native";
import Logo from "../../../assets/Logo/Logo.svg"


export default function (){
    return(
        <View style={Estilos.container}>
            <Logo style={Estilos.tamanhoLogo}/>
        </View>
    )
}
