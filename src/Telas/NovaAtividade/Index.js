import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Switch} from "react-native";
import BarraSuperior from "../../Recursos/BarraSuperior/Index";
import Estilos from './Styles';
import Atividades from '../../Services/sqlite/Atividades';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Feather} from '@expo/vector-icons';

export default function Cadastro(){
    //Define os dados do CRUD
    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria] = useState('')
    const [descricao, setDescricao] = useState('')
    const [btn, setBtn] = useState(false)
    const [date, setDate] = useState(new Date());

    //Métodos do DateTimePicker
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    //Setter para os campos de texto e botões
    const reset = () => {
        setBtn(false);
        setCategoria('');
        setTitulo('');
        setDescricao('');
    }
    //Passa os dados para o CRUD
    const save = () => {
        if(titulo === ''){
            return console.log('Digite o Titulo')
        }else if(categoria === ''){
            return console.log('Digite a categoria')
        }else{
            Atividades.create({titulo: titulo, categoria: categoria, descricao: descricao,  data: '10/11/20', notificar: btn, atrasado: false, concluida: false})
            .then(id => console.log("Activity created with id " + id))
            .catch(err => console.log(err))
            alert('Adicionado com sucesso!')
            reset
        }
        
    }

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
                <View style={Estilos.data}>
                    <TouchableOpacity onPress={showDatepicker}>
                        <Feather name='calendar' color='black' size={30}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={showTimepicker}>
                        <Feather name='clock' color='black' size={30}/>
                    </TouchableOpacity>
                </View>
                <View style={Estilos.viewSwitch}>
                    <Text style={Estilos.notificar}>Noticar</Text>
                    <Switch trackColor={{false: '#dedede', true: '#3e7fff'}} thumbColor={btn ? '#7eaaff' : '#dedede'} value={btn} onValueChange={()=>{setBtn(!btn)}}/>
                </View>

            </View>
            <TouchableOpacity style={Estilos.Btn} onClick={save}>
                <Text style={Estilos.textBtn}>Adicionar</Text>
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                    minimumDate={new Date}
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    )
}

