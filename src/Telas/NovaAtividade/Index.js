import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Switch} from "react-native";
import BarraSuperior from "../../Recursos/BarraSuperior/Index";
import Estilos from './Styles';
import Atividades from '../../Services/sqlite/Atividades';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Feather} from '@expo/vector-icons';
import normalizador from '../../Recursos/normalizador';
import {useNavigation} from '@react-navigation/native';

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

    const Navigation = useNavigation()

    function NavigateToAtividades(){
        Navigation.navigate('Atividades')
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
    // Muda setShow para true o que faz com que DateTimePicker apareça na tela.
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    //Altera o modo de exibição para DatePicker
    const showDatepicker = () => {
        showMode('date');
    };
    //Altera o modo de exibição para TimePicker
    const showTimepicker = () => {
        showMode('time');
    };
    //Formata a data que vai ser mostrada no campo de seleção da data
    const formatData = () => {
        let dia = date.getDate();
        let mes = date.getMonth();
        let ano = date.getFullYear();

        if (dia.toString().length === 1){
            dia = '0'+ dia
        }
        if (mes.toString().length === 1){
            mes = '0'+ (mes + 1)
        }
        return dia + '/'+ mes + '/' + ano
    }
    //Formata as horas e minutos que vão ser mostrados no campo de seleção de tempo
    const formatTime = () =>{
        let hora = date.getHours()
        let minutos = date.getMinutes()

        if (hora.toString().length === 1){
            hora = '0'+ hora
        }
        if (minutos.toString().length === 1){
            minutos = '0'+ minutos
        }
        return hora + ':'+ minutos
    }
    //Setter para os campos de texto e botões
    const reset = () => {
        setBtn(false);
        setCategoria(' ');
        setTitulo(' ');
        setDescricao(' ');
        setDate(new Date());
    }
    //Passa os dados para o CRUD
    const save = () => {
        //Verifica se nenhum dos campos obrigatórios estão vazios, se não, é passado os dados para o banco de dados e o usuário é retornardo para a tela de Atividades. Se algum campo estiver vazio, será retornado um Alert
        if(titulo === '' || titulo === " "){
            return alert('Digite o Titulo')
        }else if(categoria === '' || categoria === " "){
            return alert('Digite a categoria')
        }else{
            Atividades.create({titulo: titulo, categoria: categoria, descricao: descricao,  data: date.toString(), notificar: btn, atrasado: false, concluida: false})
            .then(id => console.log("Activity created with id " + id))
            .catch(err => console.log(err))
            alert('Adicionado com sucesso!')
            reset()
            NavigateToAtividades()
        }
    }

    return(
        <View style={Estilos.mainView}>
            <BarraSuperior conteudo='Nova tarefa' valor={false}/>
            <View style={Estilos.secondaryView}>
                <Text style={Estilos.titulos}>Título da tarefa</Text>
                <TextInput style={Estilos.campos} value={titulo} onChangeText={text=>setTitulo(text)}/>
                <Text style={Estilos.titulos}>Categoria</Text>
                <TextInput style={Estilos.campos} value={categoria} onChangeText={categoria=>setCategoria(categoria)}/>
                <Text style={Estilos.titulos}>Descrição<Text style={Estilos.descricao}> (Opcional)</Text></Text>
                <TextInput style={Estilos.textoInput} value={descricao} onChangeText={text => setDescricao(text)}/>
                <Text style={Estilos.titulos}>Data</Text>
                <View style={Estilos.data}>
                    <Feather name='calendar' color='gold' size={normalizador.widthPercentageToDP('4%')}/>
                    <TouchableOpacity onPress={showDatepicker}>
                        <Text style={Estilos.textoData}>{formatData()}</Text>
                    </TouchableOpacity>
                    <Feather name='clock' color='gold' size={normalizador.widthPercentageToDP('4%')}/>
                    <TouchableOpacity onPress={showTimepicker}>
                        <Text style={Estilos.textoData}>{formatTime()}</Text>
                    </TouchableOpacity>
                </View>
                <View style={Estilos.viewSwitch}>
                    <Text style={Estilos.notificar}>Noticar</Text>
                    <Switch trackColor={{false: '#dedede', true: '#3e7fff'}} thumbColor={btn ? '#7eaaff' : '#dedede'} value={btn} onValueChange={()=>{setBtn(!btn)}}/>
                </View>
            </View>
            <TouchableOpacity style={Estilos.Btn} onPress={save}>
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
