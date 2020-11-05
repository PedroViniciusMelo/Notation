import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Switch} from "react-native";
import Barra from "../BarraSuperior";
import Estilos from './Styles';


export default function Cadastro(){
    const [titulo, setNome] = useState('')
    const [categoria, setCategoria] = useState('')
    const [btn, setBtn] = useState(true)

    return(
        <View style={Estilos.mainView}>
            <Barra conteudo='Nova tarefa' valor='false'/>
            <View style={Estilos.secondaryView}>
                <Text style={Estilos.titulos}>Título da tarefa</Text>
                <TextInput style={Estilos.campos} value={titulo} onSubmitEditing={text=>setNome(text)}/>
                <Text style={Estilos.titulos}>Categoria</Text>
                <TextInput style={Estilos.campos} value={categoria} onSubmitEditing={categoria=>setCategoria(categoria)}/>
                <Text style={Estilos.titulos}>Descrição<Text style={Estilos.descricao}> (Opcional)</Text></Text>
                <TextInput style={Estilos.textoInput}/>
                <Text style={Estilos.titulos}>Data</Text>
                <View style={Estilos.data}/>
                <Switch trackColor={{false: '#dedede', true: '#3e7fff'}} thumbColor={btn ? '#7eaaff' : '#dedede'} value={btn} onValueChange={()=>{setBtn(!btn)}}/>
            </View>
            <TouchableOpacity style={Estilos.Btn}>
                <Text style={Estilos.textBtn}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    )
}

