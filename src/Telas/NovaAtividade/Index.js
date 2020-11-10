import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Switch} from "react-native";
import BarraSuperior from "../../Recursos/BarraSuperior/Index";
import Estilos from './Styles';


export default function Cadastro(){
    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria] = useState('')
    const [descricao, setDescricao] = useState('')
    const [btn, setBtn] = useState(true)

    return(
        <View style={Estilos.mainView}>
            <BarraSuperior conteudo='Nova tarefa' valor='false'/>
            <View style={Estilos.secondaryView}>
                <Text style={Estilos.titulos}>Título da tarefa</Text>
                <TextInput style={Estilos.campos} value={titulo} onChangeText={text=>setTitulo(text)}/>
                <Text style={Estilos.titulos}>Categoria</Text>
                <TextInput style={Estilos.campos} value={categoria} onChangeText={categoria=>setCategoria(categoria)}/>
                <Text style={Estilos.titulos}>Descrição<Text style={Estilos.descricao}> (Opcional)</Text></Text>
                <TextInput style={Estilos.textoInput} value={descricao} onChangeText={text => setDescricao(text)}/>
                <Text style={Estilos.titulos}>Data</Text>
                <TouchableOpacity style={Estilos.data}>

                </TouchableOpacity>
                <View style={Estilos.viewSwitch}>
                    <Text style={Estilos.notificar}>Noticar</Text>
                    <Switch trackColor={{false: '#dedede', true: '#3e7fff'}} thumbColor={btn ? '#7eaaff' : '#dedede'} value={btn} onValueChange={()=>{setBtn(!btn)}}/>
                </View>

            </View>
            <TouchableOpacity style={Estilos.Btn}>
                <Text style={Estilos.textBtn}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    )
}

