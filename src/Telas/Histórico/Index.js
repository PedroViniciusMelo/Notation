import React, { useState } from 'react';
import BarraSuperior from '../../Recursos/BarraSuperior/Index';
import { View, FlatList, StatusBar } from "react-native";
import ContainerAtividade from '../../Recursos/ContainerAtividade/Index';
import Atividades from '../../Services/sqlite/Atividades';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Estilos from './Styles'

export default function historico(){
    const [atividades, setAtividade] = useState(Atividades.findByConcluded('1').then(a => setAtividade(a)))
    const Navigation = useNavigation()

    return(
        <View style={Estilos.mainContainer}>
            <StatusBar backgroundColor='#006EFF'/>
            <BarraSuperior
                valor={false}
                conteudo='Histórico'
                onPress={() => Navigation.dispatch(DrawerActions.openDrawer())}/>
            <View style={Estilos.contianerFlatList}>
                <FlatList
                    style={Estilos.flatList}
                    data={atividades}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) =>
                        <ContainerAtividade
                            concluida={true}
                            obj={item}
                            />}
                    />
            </View>
        </View>
    )
}

