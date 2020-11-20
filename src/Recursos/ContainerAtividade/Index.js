import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";
import normalizador from "../normalizador";
import Estilos from './Styles';
import { useNavigation } from '@react-navigation/native';

export default function Container(props){

    const Navigation = useNavigation()

    //StackNavigator, usado no container para que quando ele seja clicado seja aberto o componente de visualizarTarefa
    function NavigateToVisualizarAtividade(){
        Navigation.navigate('VisualizarAtividade', props.obj)
    }

    //Formata a data que vai ser mostrada no container da data
    const formatData = () => {
        let date = new Date(props.obj.concluida ? props.obj.dataConcluida : props.obj.data)
        let dia = date.getDate();
        let mes = date.getMonth() + 1;
        let ano = date.getFullYear();

        if (dia.toString().length === 1){
            dia = '0' + dia
        }
        if (mes.toString().length === 1){
            mes = '0' + mes
        }
        
        return dia + '/'+ mes + '/' + ano
    }
    //Formata as horas e minutos que vão ser mostrados no campo data. No momento a função não está sendo usada, porém pode ser implementada se necessário.
    /*const formatTime = () =>{
        let date = new Date(props.data)
        let hora = date.getHours()
        let minutos = date.getMinutes()

        if (hora.toString().length === 1){
            hora = '0'+ hora
        }
        if (minutos.toString().length === 1){
            minutos = '0'+ minutos
        }
        return hora + ':'+ minutos
    }*/

    return(
        <TouchableOpacity 
            disabled={props.obj.concluida}
            style={Estilos.container} 
            onPress={NavigateToVisualizarAtividade}>
            <View style={{maxWidth: '80%'}}>
                <Text style={Estilos.texto}>{props.obj.titulo}</Text>
            </View>
            <View style={Estilos.containerS}>
                <View style={Estilos.categoria}>
                    <Text style={Estilos.textoCategoria}>{props.obj.categoria}</Text>
                </View>
                <View style={Estilos.data}>
                    <View style={{flexDirection: 'row'}}>
                        {props.obj.concluida ? 
                            <Text style={Estilos.textoData2}>Atividade concluida em </Text> 
                            : 
                            <Feather 
                                name='calendar' 
                                color='black' 
                                size={normalizador.widthPercentageToDP('5%')}
                                />}
                        <Text style={Estilos.textoData}>{formatData()}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}


