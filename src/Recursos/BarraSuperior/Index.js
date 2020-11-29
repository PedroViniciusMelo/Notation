import React from 'react';
import { Text, View, TouchableOpacity } from "react-native";
import Estilos from "./Styles";
import Barra from "../../../assets/Barra/Barra.svg";
import Categorias from "../../../assets/Barra/Categorias.svg";
import {useNavigation} from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { BorderlessButton } from 'react-native-gesture-handler';


export default function BarraSuperior (props) {

    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack()
    }

    return (
        <View style={Estilos.container}>
            {props.voltar ?
                (
                <BorderlessButton
                    onPress = {handleGoBack}>
                    <Icon 
                        name='arrow-left' 
                        color={'white'} 
                        size={35}/>
                </BorderlessButton>
                )
                :
                (
                <TouchableOpacity 
                    onPress={props.onPress}
                    hitSlop={{top: 20, left: 20, right: 20, bottom: 20}}
                    >
                    <Barra/>
                </TouchableOpacity>
                )
            }

            <Text style={Estilos.text}>{props.conteudo}</Text>

            {props.filtro ? 
                    (<TouchableOpacity>
                        <Categorias/>
                    </TouchableOpacity>) 
                : 
                    <View style={{width: '8%'}}></View>}
                    
        </View>
    )
}
