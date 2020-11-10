import React from 'react';
import BarraSuperior from '../../Recursos/BarraSuperior/Index'
import {View, TouchableOpacity, FlatList} from "react-native";
import {Feather} from "@expo/vector-icons";
import ContainerAtividade from '../../Recursos/ContainerAtividade/Index';
import Estilos from './Style';

const atividades = [{id: '01', titulo: 'Fazer a tarefa de IA', categoria: 'Universidade', data: '10/02/2020'}]

export default function home(){
    return(
        <View style={Estilos.container}>
            <BarraSuperior conteudo='Atividades' valor='false'/>
            <View style={Estilos.containerAtividades}>
                <FlatList style={{flex: 1}}
                          data={atividades}
                          keyExtractor={item => item.id}
                          renderItem={({item})=>{return(<ContainerAtividade titulo={item.titulo} categoria={item.categoria} data={item.data}/>)}}/>
            </View>
            <TouchableOpacity style={Estilos.btn} onClick={()=>{}}>
                <Feather name='plus' size={50} color='white'/>
            </TouchableOpacity>
        </View>
    )
}
