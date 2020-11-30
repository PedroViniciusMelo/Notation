import React, { useState } from 'react';
import BarraSuperior from '../../Recursos/BarraSuperior/Index';
import { View, TouchableOpacity, FlatList, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import ContainerAtividade from '../../Recursos/ContainerAtividade/Index';
import Estilos from './Style';
import Atividades from '../../Services/sqlite/Atividades';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import filtros from '../../Recursos/Filtros';
import { Provider } from 'react-native-paper';


export default function home(props) {
    const [dataF, setDataF] = useState(false)
    const [atrasadaF, setAtrasadaF] = useState(false)
    const [categoriaF, setCategoriaF] = useState(false)

    const [atividades, setAtividades] = useState(Atividades.findByConcluded('0').then(a => {setAtividades(filtros(a, dataF, atrasadaF, categoriaF))}))
    //O primiero parametro são as atividades, o segundo é o filtro por data, terceiro filtro por atrasada, quarto filtro por categoria
   
    const Navigation = useNavigation()
    //StackNavigator, usado no botão de adicionar tarefa pra que quando clicado seja aberto o componente de NovaAtividade
    function NavigateToCreatActivity() {
        Navigation.navigate('CriarNovaAtividade')
    }

    return (
        <Provider>
            <View style={Estilos.container}>
            <StatusBar backgroundColor='#006EFF'/>
            <BarraSuperior
                conteudo='Atividades'
                onPress={() => Navigation.dispatch(DrawerActions.openDrawer())}
                onPressFiltros={(a, b, c) => {
                    setDataF(a)
                    setAtrasadaF(b)
                    setCategoriaF(c)
                }}
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
        </Provider>
        

    )
}
