import React, { useState } from 'react';
import BarraSuperior from '../../Recursos/BarraSuperior/Index'
import { View, TouchableOpacity, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import ContainerAtividade from '../../Recursos/ContainerAtividade/Index';
import Estilos from './Style';
import Atividades from '../../Services/sqlite/Atividades';
import { useNavigation, DrawerActions } from '@react-navigation/native'



export default function home() {
    const [atividades, setAtividade] = useState(Atividades.findByConcluded('0').then(a => setAtividade(a)))
 
    const Navigation = useNavigation()
    //StackNavigator, usado no botão de adicionar tarefa pra que quando clicado seja aberto o componente de NovaAtividade
    function NavigateToCreatActivity() {
        Navigation.navigate('CriarNovaAtividade')
    }

    return (
        <View style={Estilos.container}>
            <BarraSuperior
                conteudo='Atividades'
                onPress={() => Navigation.dispatch(DrawerActions.openDrawer())}
                valor={true} />
            <View style={Estilos.containerAtividades}>
                <FlatList style={{ flex: 1 }}
                    data={atividades}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => 
                        <ContainerAtividade 
                            titulo={item.titulo} 
                            categoria={item.categoria} 
                            data={item.data} 
                            id={item.id} 
                            descricao={item.descricao}/>}
                    />
            </View>
            <TouchableOpacity 
                style={Estilos.btn} 
                onPress={NavigateToCreatActivity}>
                <Feather 
                    name='plus' 
                    size={50} 
                    color='white' />
            </TouchableOpacity>
        </View>
    )
}
