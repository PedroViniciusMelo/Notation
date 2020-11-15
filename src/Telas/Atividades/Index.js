import React, {useState} from 'react';
import BarraSuperior from '../../Recursos/BarraSuperior/Index'
import {View, TouchableOpacity, FlatList, Text} from "react-native";
import {Feather} from "@expo/vector-icons";
import ContainerAtividade from '../../Recursos/ContainerAtividade/Index';
import Estilos from './Style';
import Atividades from '../../Services/sqlite/Atividades';



export default function home(){
    const [atividades, setAtividades] = useState([])
    console.log(Atividades.all())
    
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
