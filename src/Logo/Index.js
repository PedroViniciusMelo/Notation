import React from 'react';
import Estilos from "./Styles";
import {Text, View} from "react-native";
import Vetor1 from "../../assets/SplashScreen/Vector_3.svg";
import Vetor2 from "../../assets/SplashScreen/Vector_4.svg";
import Vetor3 from "../../assets/SplashScreen/Vector_5.svg";


export default function (){
    return(
        <View style={Estilos.rectangle}>
            <Text style={Estilos.n}>N</Text>
            <Vetor1 style={Estilos.barra}/>
            <Vetor2 style={Estilos.top}/>
            <Vetor3 style={Estilos.bottom}/>
            <Text style={Estilos.text}>otation</Text>
        </View>
    )
}
