import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, ScrollView, ToastAndroid } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Estilos from './Style';
import normalizador from "../../Recursos/normalizador";
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Atividades from '../../Services/sqlite/Atividades';
import * as Notifications from 'expo-notifications';
import formatTime from '../../Recursos/Formatador';
import schedulePushNotification from '../../Services/Notifications'

import BarraSuperior from '../../Recursos/BarraSuperior/Index'

function exibirToast(props) {
    ToastAndroid.showWithGravity(
        `${props}`,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
    );
}

export default function Index(props) {
    //ID da atividade
    let id = props.route.params.id
    let idNotification = props.route.params.notificar
    const [atvConcluida, setAtvConcluida] = useState(props.route.params.concluida)

    //Dados da atividade
    const [data, setData] = useState(new Date(props.route.params.data))
    const [categoria, setCategoria] = useState(props.route.params.categoria)
    const [titulo, setTitulo] = useState(props.route.params.titulo)
    const [descricao, setDescricao] = useState(props.route.params.descricao)
    const [editavel, setEditavel] = useState(false)

    //Método de navegação para tela inicial
    const Navigation = useNavigation()
    function goBackToMain() {
        Navigation.goBack()
    }
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

    //Método para remoção da notificação
    async function removeNotification(){
        await Notifications.cancelScheduledNotificationAsync(idNotification)
    }

    //Atulizar dados da atividade
    const update = () => {
        async function alertar(){
            await schedulePushNotification(titulo, data).then(
                id => updateAtividade(id)
            )
        }

        function updateAtividade(IdNote){
            Atividades.update(id, { ...props.route.params, titulo: titulo, categoria: categoria, descricao: descricao, data: data.toString() , notificar: IdNote, concluida: false})
            .then(() => {
                if(atvConcluida){
                    exibirToast('Desmarcada como concluida!')
                }else{
                    exibirToast('Atualizado com sucesso!')
                    goBackToMain()
                }
                
            })
            .catch(err => console.log(err))
        }

        if (titulo === '' || titulo === ' ') {
            exibirToast('Digite o Titulo')
            return
        } else if (categoria === '' || categoria === ' ') {
            exibirToast('Digite a categoria')
            return
        } else {
            if(idNotification != ''){
                removeNotification()
                    .then(alertar())
            }else{
                updateAtividade('')
            }  
        }
    }
    //Deletar atividade
    const deletar = () =>{
        Atividades.remove(id)
            .then(() => {
                removeNotification()
                exibirToast('Removido com sucesso!')
                goBackToMain()
            })
            .catch(err => console.log(err))
    }
    //Colocar o campo concluida como True
    const setConcluida = () => {
        Atividades.update(id, { ...props.route.params, concluida: true, dataConcluida: new Date().toString(), atrasado: false})
            .then(() => {
                removeNotification()
                exibirToast('Adicionada como concluida!')
                goBackToMain()
            })
            .catch(err => console.log(err))
    }
    function BtnFunction({...propsContente}){
        return(
            <TouchableOpacity
                style={propsContente.props.estilo}
                onPress={propsContente.props.onPress}>
                <Feather
                    name={propsContente.props.name}
                    size={normalizador.widthPercentageToDP('5%')}
                    color='white'
                    />
                <Text style={Estilos.txtBtn1}>{propsContente.props.textoBtn}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={Estilos.container}>
            <BarraSuperior
                conteudo= 'Tarefa'
                filtro= {false}
                voltar= {true}/>
            <View style={Estilos.containerSecundario}>
                <View style={Estilos.containerFatList}>
                    <ScrollView contentContainerStyle={{minHeight: '100%', minWidth: '100%'}}>
                        <View style={Estilos.contanierTituloAtividade}>
                            <TextInput
                                value={titulo}
                                onChangeText={text => setTitulo(text)}
                                editable={editavel}
                                style={Estilos.titulo}
                            />

                            <TouchableOpacity
                                disabled={atvConcluida}
                                onPress={() => setEditavel(!editavel)}
                                hitSlop={{top: 30, left: 30, right: 30, bottom: 30}}
                                >
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
                                disabled={!editavel}
                                hitSlop={{top: 30, left: 30, right: 30, bottom: 30}}
                                >
                                <Text style={Estilos.txtData}>{formatTime.formatDate(false, data)}</Text>
                            </TouchableOpacity>
                            <Feather
                                name='clock'
                                size={normalizador.widthPercentageToDP('4%')}
                                color='gold'
                                />
                            <TouchableOpacity
                                onPress={showTimepicker}
                                disabled={!editavel}
                                hitSlop={{top: 30, left: 30, right: 30, bottom: 30}}
                                >
                                <Text style={Estilos.txtData}>{formatTime.formatTime(false, data)}</Text>
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
                    {!atvConcluida ?
                        editavel ?
                            <BtnFunction
                                props={{
                                    estilo: Estilos.Btn1,
                                    onPress: update,
                                    name: 'edit',
                                    textoBtn: 'Salvar alterações'
                                }}
                            />
                        :
                            <BtnFunction
                                props={{
                                    estilo: Estilos.Btn1,
                                    onPress: setConcluida,
                                    name: 'check',
                                    textoBtn: 'Marcar como concluida'
                                }}
                            />
                    :
                        <BtnFunction
                            props={{
                                estilo: Estilos.btn3,
                                onPress: (() => {
                                    setAtvConcluida(false)
                                    update()
                                }),
                                name: 'x',
                                textoBtn: 'Desmarcar como concluida'
                            }}
                        />
                    }
                    <BtnFunction
                        props={{
                            estilo: Estilos.Btn2,
                            onPress: deletar,
                            name: 'trash-2',
                            textoBtn: 'Deletar tarefa'
                        }}
                    />
                    
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

