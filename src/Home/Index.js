import React from 'react';
import {View, FlatList, Text} from "react-native";
import Estilos from './Styles';
import BarraSuperior from '../BarraSuperior/Index';
import Logo from "../Logo/Index";

const pessoas = [
    {id: '01', desc: 'Pedro Silva'},
    {id: '02', desc: 'José Pereira'},
    {id: '03', desc: 'Cleyton Alves'},
    {id: '04', desc: 'Cleyton Alves'},
    {id: '05', desc: 'Cleyton Alves'},
]

export default function HomeScreen (){
    return(
        <View style={Estilos.view}>
            <BarraSuperior valor='true' conteudo='Sobre o APP'/>
            <View style={Estilos.secondaryView}>
                <View style={{padding : 10}}/>
                <Logo/>
                <Text style={Estilos.text}>Desenvolvido</Text>
                <View style={Estilos.flatListSize}>
                    <FlatList
                        style={Estilos.flatLista}
                        data={pessoas}
                        keyExtractor={item => item.id}
                        renderItem={({item})=><View style={Estilos.flatlist}><Text style={Estilos.nomes}>{item.desc}</Text></View>}
                    >
                    </FlatList>
                </View>
                <Text style={Estilos.text}>Contato</Text>
                <Text style={Estilos.nomes}>email@mail.com</Text>
                <View style={Estilos.quadrado}>
                    <Text style={Estilos.textoQuadrado}>BRASÃO CASO NECESSÁRIO</Text>
                </View>
                <Text style={Estilos.direitos}>2020 direitos reservados</Text>
            </View>
        </View>
    )
}

