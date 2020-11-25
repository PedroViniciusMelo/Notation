import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, ScrollView, StatusBar, Platform } from "react-native";
import BarraSuperior from "../../Recursos/BarraSuperior/Index";
import Estilos from './Styles';
import Atividades from '../../Services/sqlite/Atividades';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather } from '@expo/vector-icons';
import normalizador from '../../Recursos/normalizador';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';



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
        let hora = date.getHours()
        let minutos = date.getMinutes()

        if (hora.toString().length === 1) {
            hora = '0' + hora
        }
        if (minutos.toString().length === 1) {
            minutos = '0' + minutos
        }
        return hora + ':' + minutos
    }
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
    
        function createThen(){
            alert('Adicionado com sucesso!')
            reset()
            NavigateToAtividades()
        }

        Atividades.create({ titulo: titulo, categoria: categoria, descricao: descricao, data: date.toString(), notificar: IdFinal, atrasado: false, concluida: false, dataConcluida: '' })
                .then(createThen())
                .catch(err => console.log(err))
    }
    
    const save = () => {
        //Verifica se nenhum dos campos obrigatórios estão vazios, se não, é passado os dados para o banco de dados e o usuário é retornardo para a tela de Atividades. Se algum campo estiver vazio, será retornado um Alert
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
    

    async function schedulePushNotification() {
        await Notifications.scheduleNotificationAsync({
            content: {
            title: "You've got mail! 📬",
            body: 'Here is the notification body',
            data: { data: 'goes here' },
            },
            trigger: { seconds: 10 },
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
                conteudo='Nova tarefa'
                onPress={() => Navigation.dispatch(DrawerActions.openDrawer())}
                valor={false}
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
                                <Text style={Estilos.textData}>{formatData()}</Text>
                            </TouchableOpacity>
                            <Feather
                                name='clock'
                                color='gold'
                                size={normalizador.widthPercentageToDP('4%')}
                                />
                            <TouchableOpacity onPress={showTimepicker}>
                                <Text style={Estilos.textData}>{formatTime()}</Text>
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

