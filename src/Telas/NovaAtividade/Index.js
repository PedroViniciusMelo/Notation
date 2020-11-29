import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, ScrollView, StatusBar, Platform } from "react-native";
import Estilos from './Styles';
import Atividades from '../../Services/sqlite/Atividades';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather } from '@expo/vector-icons';
import normalizador from '../../Recursos/normalizador';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import formatTime from '../../Recursos/Formatador';

import BarraSuperior from '../../Recursos/BarraSuperior/Index'



export default function Cadastro() {
    //Define os dados do CRUD
    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria] = useState('')
    const [descricao, setDescricao] = useState('')
    const [btn, setBtn] = useState(false)
    const [date, setDate] = useState(new Date());


    //Métodos do DateTimePicker
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const Navigation = useNavigation();
    function NavigateToAtividades() {
        Navigation.goBack()
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
    //Setter para os campos de texto e botões
    const reset = () => {
        setBtn(false);
        setCategoria(' ');
        setTitulo(' ');
        setDescricao(' ');
        setDate(new Date());
    }
    //Passa os dados para o Banco de dados
    function dados(IdFinal){
        Atividades.create({ titulo: titulo, categoria: categoria, descricao: descricao, data: date.toString(), notificar: IdFinal, atrasado: false, concluida: false, dataConcluida: '' })
                .then(() => {
                    alert('Adicionado com sucesso!')
                    NavigateToAtividades()
                })
                .catch(err => console.log(err))
    }
    //Função para salvar os dados no banco
    const save = () => {
        async function alertar(){
            await schedulePushNotification()
        }

        if (titulo === '' || titulo === ' ') {
            return alert('Digite o Titulo')
        } else if (categoria === '' || categoria === ' ') {
            return alert('Digite a categoria')
        } else {
            if(btn){
                alertar()
            }else{
                dados('')
            }
        }
    }
    //-=-=-==-=-=-=-=-=-=-=-=-=-=-=--= Métodos para a implemetação das notificações =-=-=-=-=-=-=-=-=-=-=-=-=-=-

    const notificationListener = useRef();
    const responseListener = useRef();

    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: false,
            shouldSetBadge: false,
        }),
        });

    useEffect(() => {
        registerForPushNotificationsAsync();

        notificationListener.current = Notifications.addNotificationReceivedListener();

        responseListener.current = Notifications.addNotificationResponseReceivedListener();

        return () => {
            Notifications.removeNotificationSubscription(notificationListener);
            Notifications.removeNotificationSubscription(responseListener);
        };
    }, []);

    //Método customizável para a notificação
    async function schedulePushNotification() {
        const trigger = date
        trigger.setSeconds(0);
        await Notifications.scheduleNotificationAsync({
            content: {
            title: "Olá, você tem uma nova atividade! ⌛",
            body: `Não esqueça, ${titulo}`,
            data: { data: 'goes here' },
            },
            trigger
        }).then(idNote => dados(idNote))
    }

    async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
    } else {
        alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
        });
    }
    return token;
    }



    return (
        <View style={Estilos.container}>
            <StatusBar backgroundColor='#006EFF'/>
            <BarraSuperior
                conteudo='Nova Tarefa'
                filtro={false}
                voltar = {true}
                onPress={() => Navigation.dispatch(DrawerActions.openDrawer())}
                />
            <View style={Estilos.containerSecundario}>
                <View style={Estilos.containerScrollView}>
                    <ScrollView contentContainerStyle={{minWidth: '100%', minHeight: '100%'}}>

                        <Text style={Estilos.titulos}>Título da tarefa</Text>
                        <TextInput
                            style={Estilos.textInput}
                            value={titulo}
                            placeholder='Digite o título'
                            onChangeText={text => setTitulo(text)}
                            />
                        <Text style={Estilos.titulos}>Categoria</Text>
                        <TextInput
                            style={Estilos.textInput}
                            value={categoria}
                            placeholder='Digite a categoria'
                            onChangeText={categoria => setCategoria(categoria)}
                            />
                        <Text style={Estilos.titulos}>Descrição<Text style={Estilos.descricao}> (Opcional)</Text></Text>
                        <View style={Estilos.mulTxtInput}>
                            <TextInput
                                value={descricao}
                                placeholder='Descrição'
                                multiline
                                scrollEnabled={true}
                                onChangeText={text => setDescricao(text)}
                            />
                        </View>

                        <Text style={Estilos.titulos}>Data</Text>
                        <View style={Estilos.data}>
                            <Feather
                                name='calendar'
                                color='gold'
                                size={normalizador.widthPercentageToDP('4%')}
                                />
                            <TouchableOpacity onPress={showDatepicker}>
                                <Text style={Estilos.textData}>{formatTime.formatDate(false, date)}</Text>
                            </TouchableOpacity>
                            <Feather
                                name='clock'
                                color='gold'
                                size={normalizador.widthPercentageToDP('4%')}
                                />
                            <TouchableOpacity onPress={showTimepicker}>
                                <Text style={Estilos.textData}>{formatTime.formatTime(false, date)}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={Estilos.viewSwitch}>
                            <Text style={Estilos.notificar}>Noticar</Text>
                                <Switch
                                    trackColor={{ false: '#dedede', true: '#3e7fff' }}
                                    thumbColor={btn ? '#7eaaff' : '#dedede'}
                                    value={btn}
                                    onValueChange={() => { setBtn(!btn) }}
                                    />
                        </View>
                    </ScrollView>

                </View>
                <TouchableOpacity style={Estilos.Btn} onPress={save}>
                    <Text style={Estilos.textBtn}>Adicionar</Text>
                </TouchableOpacity>
                <View/>
            </View>


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

