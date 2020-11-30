import React, {useState} from 'react';
import { Text, View, TouchableOpacity } from "react-native";
import Estilos from "./Styles";
import Barra from "../../../assets/Barra/Barra.svg";
import {useNavigation} from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { BorderlessButton } from 'react-native-gesture-handler';
import { Menu } from 'react-native-paper';
import normalizador from '../../Recursos/normalizador';



export default function BarraSuperior (props) {
    const [open, setOpen] = useState(false)
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState('Padrão');

    const navigation = useNavigation();
    function handleGoBack(){
        navigation.goBack()
    }

    //Verifica qual janela está atualmente selecionada
    function checkSelected(value){
        if  (value === selected){
            return '#D2D9E3'
        }else{
            return 'white'
        }
        
    }
    //Métodos para fechar e abrir o menu de filtros
    const openMenu = () => {
        setVisible(true)
        setOpen(true)
    };
    const closeMenu = () => {
        setVisible(false)
        setOpen(false)
    };

    //Botão para abrir o menu
    const ancora = () => {
        return(
            <TouchableOpacity 
                onPress={openMenu}
                hitSlop={{top: 20, left: 20, right: 20, bottom: 20}}>
                <Icon 
                    name={open ? 'filter' : 'filter-outline'} 
                    size={normalizador.widthPercentageToDP('6%')} 
                    color='white'
                    />
            </TouchableOpacity>
        )
    }

    return (
        <View style={Estilos.container}>
            {props.voltar ?
                (
                <BorderlessButton
                    onPress = {handleGoBack}>
                    <Icon 
                        name='arrow-left' 
                        color={'white'} 
                        size={35}/>
                </BorderlessButton>
                )
                :
                (
                <TouchableOpacity 
                    onPress={props.onPress}
                    hitSlop={{top: 20, left: 20, right: 20, bottom: 20}}
                    >
                    <Barra/>
                </TouchableOpacity>
                )
            }

            <Text style={Estilos.text}>{props.conteudo}</Text>

            {props.filtro ? 
                    (<Menu
                        style={{top: '8%'}}
                        visible={visible}
                        onDismiss={closeMenu}
                        anchor={ancora()}
                        contentStyle={{borderRadius: 20}}
                        >
                        <Menu.Item 
                            style={{backgroundColor: checkSelected('Data'), margin: '3%', borderRadius: 10}}
                            icon='calendar'
                            onPress={() => {
                                props.onPressFiltros(true, false, false)
                                setSelected('Data')
                                closeMenu()
                            }} 
                            title="Data" />
                        <Menu.Item 
                            style={{backgroundColor: checkSelected('Atrasada'), margin: '3%', borderRadius: 10}}
                            icon = 'clock-alert-outline'
                            onPress={() => {
                                props.onPressFiltros(false, true, false)
                                setSelected('Atrasada')
                                closeMenu()
                            }}  
                            title="Atrasada" />
                        <Menu.Item 
                            style={{backgroundColor: checkSelected('Categoria'), margin: '3%', borderRadius: 10}}
                            icon='animation-outline'
                            onPress={() => {
                                props.onPressFiltros(false, false, true)
                                setSelected('Categoria')
                                closeMenu()
                            }}  
                            title="Categoria" />
                        <Menu.Item 
                            style={{backgroundColor: checkSelected('Padrão'), margin: '3%', borderRadius: 10}}
                            icon='reload'
                            onPress={() => {
                                props.onPressFiltros(false, false, false)
                                setSelected('Padrão')
                                closeMenu()
                            }}  
                            title="Padrão" />
                    </Menu>) 
                : 
                    <View style={{width: '8%'}}></View>}     
        </View>      
    )
}
