import React, {useState} from 'react';
import BarraSuperior from '../../Recursos/BarraSuperior/Index'
import {View, TouchableOpacity, FlatList} from "react-native";
import {Feather} from "@expo/vector-icons";
import ContainerAtividade from '../../Recursos/ContainerAtividade/Index';
import Estilos from './Style';
import Atividades from '../../Services/sqlite/Atividades';
import {useNavigation} from '@react-navigation/native'



export default function home(){
    const [atividades, setAtividade] = useState(Atividades.all().then(a => setAtividade(a)))

    const Navigation = useNavigation()
    //StackNavigator, usado no botão de adicionar tarefa pra que qunado clicado seja aberto o componente de NovaAtividade
    function NavigateToCreatActivity(){
        Navigation.navigate('CriarNovaAtividade')
    }

    return(
        <View style={Estilos.container}>
            <BarraSuperior conteudo='Atividades' valor={true}/>
            <View style={Estilos.containerAtividades}>
                <FlatList style={{flex: 1}}
                          data={atividades}
                          keyExtractor={item => item.id.toString()}
                          renderItem={({item})=>{return(<ContainerAtividade titulo={item.titulo} categoria={item.categoria} data={item.data}/>)}}/>
            </View>
            <TouchableOpacity style={Estilos.btn} onPress={NavigateToCreatActivity}>
                <Feather name='plus' size={50} color='white'/>
            </TouchableOpacity>
        </View>
    )
}