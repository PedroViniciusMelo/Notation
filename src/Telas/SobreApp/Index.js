import React from 'react';
import { View, FlatList, Text, StatusBar, Image } from "react-native";
import Estilos from './Styles';
import BarraSuperior from '../../Recursos/BarraSuperior/Index';
import Logo from "../../Recursos/Logo/Index";
import { useNavigation, DrawerActions } from '@react-navigation/native';
import normalizador from '../../Recursos/normalizador';

//Variável contendo a lista de desenvolvedores
const pessoas = [
    { id: '01', desc: 'Orientador: Pessoa 1' },
    { id: '02', desc: 'Desenvolvedor: Pessoa 2' },
    { id: '03', desc: 'Desenvolvedor: Pessoa 3' },
    { id: '04', desc: 'Desenvolvedor: Pessoa 4' },
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
                <View style={{alignItems: 'center'}}>
                    <Text style={Estilos.text}>Contato</Text>
                    <Text style={Estilos.nomes}>unamecontact@gmail.com</Text>
                </View>
                <View style={Estilos.quadrado}>
                    <Image 
                        style={{
                            width: normalizador.widthPercentageToDP("35%"),		
                            height: normalizador.heightPercentageToDP("20%"),}}
                        source ={require("../../../assets/apoio.png")} />
                </View>
                <View>
                    <Text style={Estilos.direitos}>2020 direitos reservados</Text>
                </View>
            </View>
        </View>
    )
}

