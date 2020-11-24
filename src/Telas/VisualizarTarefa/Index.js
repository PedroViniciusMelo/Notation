import React, { useState } from 'react';
import BarraSuperior from '../../Recursos/BarraSuperior/Index';
import { View, TouchableOpacity, Text, TextInput, ScrollView, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Estilos from './Style';
import normalizador from "../../Recursos/normalizador";
import { useNavigation, DrawerActions } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Atividades from '../../Services/sqlite/Atividades';



export default function Index(props) {
    //ID da atividade
    let id = props.route.params.id

    //Dados da atividade
    const [data, setData] = useState(new Date(props.route.params.data))
    const [categoria, setCategoria] = useState(props.route.params.categoria)
    const [titulo, setTitulo] = useState(props.route.params.titulo)
    const [descricao, setDescricao] = useState(props.route.params.descricao)
    const [editavel, setEditavel] = useState(false)

    //Métodos do DateTimePicker
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || data;
        setShow(Platform.OS === 'ios');
        setData(currentDate);
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

    //Métodos para formatação da data
    //Formata a data que vai ser mostrada no campo de seleção da data
    const formatData = () => {
        let dia = data.getDate();
        let mes = data.getMonth();
        let ano = data.getFullYear();

        if (dia.toString().length === 1) {
            dia = '0' + dia
        }
        if (mes.toString().length === 1) {
            mes = '0' + (mes + 1)
        }
        return dia + '/' + mes + '/' + ano
    }
    //Formata as horas e minutos que vão ser mostrados no campo de seleção de tempo
    const formatTime = () => {
        let hora = data.getHours()
        let minutos = data.getMinutes()

        if (hora.toString().length === 1) {
            hora = '0' + hora
        }
        if (minutos.toString().length === 1) {
            minutos = '0' + minutos
        }
        return hora + ':' + minutos
    }

    //Funções de atualização, remoção e conclusão das atividades
    //Atulizar dados da atividade
    const update = () => {
        //Verifica se nenhum dos campos obrigatórios estão vazios, se não, é atualizado os dados no banco e o usuário é retornardo para a tela de Atividades. Se algum campo estiver vazio, será retornado um Alert
        if (titulo === '' || titulo === ' ') {
            return alert('Digite o Titulo')
        } else if (categoria === '' || categoria === ' ') {
            return alert('Digite a categoria')
        } else {
            Atividades.update(id, { titulo: titulo, categoria: categoria, descricao: descricao, data: data.toString(), atrasado: props.route.params.atrasado, concluida: props.route.params.concluida, dataConluida: props.route.params.dataConluida, notificar: props.route.params.notificar })
                .then(() => alert('Atualizado com sucesso!'))
                .catch(err => console.log(err))
            NavigateToAtividades()
        }
    }
    //Deletar atividade
    const deletar = () =>{
        Atividades.remove(id)
            .then(() => alert('Removido com sucesso!'))
            .catch(err => console.log(err))
        NavigateToAtividades()
    }
    //Colocar o campo concluida como True
    const setConcluida = () => {
        Atividades.update(id, {titulo: titulo, categoria: categoria, descricao: descricao, data: data.toString(), atrasado: props.route.params.atrasado, notificar: props.route.params.notificar , concluida: true, dataConcluida: new Date().toString()})
            .then(() => alert('Adicionada como concluida!'))
            .catch(err => console.log(err))
        NavigateToAtividades()
    }
    //Método de navegação para tela inicial
    const Navigation = useNavigation()

    function NavigateToAtividades() {
        Navigation.navigate('Atividades')
    }


    return (
        <View style={Estilos.container}>
            <StatusBar backgroundColor='#006EFF'/>
            <BarraSuperior
                valor={false}
                conteudo='Visualizar'
                onPress={() => Navigation.dispatch(DrawerActions.openDrawer())} />
            <View style={Estilos.containerSecundario}>
                <View style={Estilos.containerFatList}>
                    <ScrollView contentContainerStyle={{minHeight: '100%', minWidth: '100%'}}>
                        <View style={Estilos.contanierTituloAtividade}>
                            <TextInput
                                value={titulo}
                                onChangeText={text => setTitulo(text)}
                                editable={editavel}
                                style={{color: 'black', marginBottom: 20, maxWidth: '80%', fontSize: normalizador.widthPercentageToDP('6%'), fontFamily: 'Poppins_700Bold'}}
                            />

                            <TouchableOpacity onPress={() => setEditavel(!editavel)} >
                                <Feather
                                    name='edit'
                                    size={normalizador.widthPercentageToDP('6%')}/>
                            </TouchableOpacity>
                        </View>

                        <View style={Estilos.categoria}>
                            <TextInput
                            style={Estilos.txtCategoria}
                            value={categoria}
                            onChangeText={text => setCategoria(text)}
                            editable={editavel}
                            />
                        </View>

                        <View style={Estilos.data}>
                            <Feather
                                name='calendar'
                                size={normalizador.widthPercentageToDP('4%')}
                                color='gold'
                                />
                            <TouchableOpacity
                                onPress={showDatepicker}
                                disabled={!editavel}>
                                <Text style={Estilos.txtData}>{formatData()}</Text>
                            </TouchableOpacity>
                            <Feather
                                name='clock'
                                size={normalizador.widthPercentageToDP('4%')}
                                color='gold'
                                />
                            <TouchableOpacity
                                onPress={showTimepicker}
                                disabled={!editavel}>
                                <Text style={Estilos.txtData}>{formatTime()}</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={Estilos.descricao}>Descrição</Text>
                        <View   style={Estilos.txtDescricao}>
                            <TextInput
                                multiline
                                value={descricao}
                                editable={editavel}
                                onChangeText={text => setDescricao(text)}
                            />
                        </View>
                    </ScrollView>
                </View>
                <View>
                    {editavel ?
                        <TouchableOpacity
                            style={Estilos.Btn1}
                            onPress={update}>
                            <Feather
                                name='edit'
                                size={normalizador.widthPercentageToDP('5%')}
                                color='white'
                                />
                            <Text style={Estilos.txtBtn1}>Salvar alterações</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            style={Estilos.Btn1}
                            onPress={setConcluida}>
                            <Feather
                                name='check'
                                size={normalizador.widthPercentageToDP('5%')}
                                color='white'
                                />
                            <Text style={Estilos.txtBtn1}>Marcar como concluida</Text>
                        <View/>
                        </TouchableOpacity>
                    }
                    <TouchableOpacity
                        style={Estilos.Btn2}
                        onPress={deletar}>
                        <Feather
                            name='trash-2'
                            size={normalizador.widthPercentageToDP('5%')}
                            color='white'
                            />
                        <Text style={Estilos.txtBtn1}>Deletar tarefa</Text>
                        <View/>
                    </TouchableOpacity>
                </View>
                {show && (
                    <DateTimePicker
                        minimumDate={new Date}
                        testID="dateTimePicker"
                        value={data}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        />)}
            </View>
        </View>
    )
}

