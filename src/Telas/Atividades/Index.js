import React, { useState } from 'react';
import BarraSuperior from '../../Recursos/BarraSuperior/Index';
import { View, TouchableOpacity, FlatList, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import ContainerAtividade from '../../Recursos/ContainerAtividade/Index';
import Estilos from './Style';
import Atividades from '../../Services/sqlite/Atividades';
import { useNavigation, DrawerActions } from '@react-navigation/native';


export default function home(props) {
    const [atividades, setAtividades] = useState(Atividades.findByConcluded('0').then(a => update(a)))
  

    function update(atividade){
        let array = []
        atividade.forEach(element => {
            if(new Date(element.data) < new Date()){
                array.push({...element, atrasado: true})
            }else{
                array.push({...element, atrasado: false})
            }
        })
        setAtividades(array)
    }



    const Navigation = useNavigation()
    //StackNavigator, usado no botão de adicionar tarefa pra que quando clicado seja aberto o componente de NovaAtividade
    function NavigateToCreatActivity() {
        Navigation.navigate('CriarNovaAtividade')
    }

    return (
        <View style={Estilos.container}>
            <StatusBar backgroundColor='#006EFF'/>
            <BarraSuperior
                conteudo='Atividades'
                onPress={() => Navigation.dispatch(DrawerActions.openDrawer())}
                filtro={true}
                voltar = {false} />
            <View style={Estilos.containerSecundario}>
                <FlatList
                    style={Estilos.flatList}
                    data={atividades}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) =>
                        <ContainerAtividade
                            concluida={false}
                            obj={item}
                            />}
                    />
                <TouchableOpacity
                    style={Estilos.btn}
                    onPress={NavigateToCreatActivity}>
                    <Feather
                        name='plus'
                        size={60}
                        color='white' />
                </TouchableOpacity>
            </View>
        </View>

    )
}
