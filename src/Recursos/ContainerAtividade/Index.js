import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";
import normalizador from "../normalizador";
import Estilos from './Styles';
import { useNavigation } from '@react-navigation/native';
import formatTime from '../Formatador';

export default function Container(props){

    //let concluida = props.obj.concluida === '1';

    //StackNavigator, usado no container para que quando ele seja clicado seja aberto o componente de visualizarTarefa
    const Navigation = useNavigation()
    function NavigateToVisualizarAtividade(){
        Navigation.navigate('VisualizarAtividade', props.obj)
    }

    const textoConcluida = <Text style={Estilos.textoData2}>Atividade concluida em </Text>;

    const iconeCalendario = (<Feather
                            name='calendar'
                            color='black'
                            size={normalizador.widthPercentageToDP('5%')}
                            />)

    const atrasada = (<View style={Estilos.atrasado}>
                            <Text style={Estilos.txtAtrasado}>Atrasada</Text>
                            <Feather 
                                name='alert-triangle' 
                                size={normalizador.widthPercentageToDP('5%')} 
                                color='red'
                                />
                        </View> )

    const statusDaTarefa = () =>{
        if(props.obj.concluida == 1){
            return textoConcluida;
        }else if(props.obj.atrasada){
            return atrasada;
        }else{
            return iconeCalendario;
        }
    }

    return(
        <TouchableOpacity
            style={Estilos.container}
            onPress={NavigateToVisualizarAtividade}>
            <View style={{maxWidth: '75%'}}>
                <Text style={Estilos.texto}>{props.obj.titulo}</Text>
            </View>
            <View style={Estilos.containerS}>
                <View style={Estilos.categoria}>
                    <Text style={Estilos.textoCategoria}>{props.obj.categoria}</Text>
                </View>
                <View style={Estilos.data}>
                    <View style={Estilos.classificacao}>
                    {statusDaTarefa()}    
                    <Text style={Estilos.textoData}>{formatTime.formatDate(false, new Date(props.obj.concluida ==1 ? props.obj.dataConcluida : props.obj.data))}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}


