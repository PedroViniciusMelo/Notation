import React from 'react';
import { View, FlatList, Text, StatusBar } from "react-native";
import Estilos from './Styles';
import BarraSuperior from '../../Recursos/BarraSuperior/Index';
import Logo from "../../Recursos/Logo/Index";
import { useNavigation, DrawerActions } from '@react-navigation/native';

//Variável contendo a lista de desenvolvedores
const pessoas = [
    { id: '01', desc: 'Pedro Silva' },
    { id: '02', desc: 'José Pereira' },
    { id: '03', desc: 'Cleyton Alves' },
    { id: '04', desc: 'Cleyton Alves' },
    { id: '05', desc: 'Cleyton Alves' },
    { id: '06', desc: 'Pedro Silva' },
    { id: '07', desc: 'Pedro Silva' },
]

export default function HomeScreen() {

    const Navigation = useNavigation();

    return (
        <View style={Estilos.container}>
            <StatusBar backgroundColor='#006EFF'/>
            <BarraSuperior
                filtro={false}
                voltar={false}
                onPress={() => Navigation.dispatch(DrawerActions.openDrawer())}
                conteudo='Sobre o APP' />
            <View style={Estilos.containerSecundario}>
                <Logo/>
                <View style={Estilos.containerFl}>
                    <Text style={Estilos.text}>Desenvolvido</Text>
                    <FlatList
                        data={pessoas}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <View><Text style={Estilos.nomes}>{item.desc}</Text></View>}
                        />
                </View>
                <View>
                    <Text style={Estilos.text}>Contato</Text>
                    <Text style={Estilos.nomes}>email@mail.com</Text>
                </View>
                <View style={Estilos.quadrado}>
                    <Text style={Estilos.textoQuadrado}>BRASÃO CASO NECESSÁRIO</Text>
                </View>
                <View>
                    <Text style={Estilos.direitos}>2020 direitos reservados</Text>
                </View>
            </View>
        </View>
    )
}

