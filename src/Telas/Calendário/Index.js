import React, { useState } from 'react'
import { Agenda } from "react-native-calendars";
import { View, StatusBar } from "react-native";
import BarraSuperior from '../../Recursos/BarraSuperior/Index';
import Atividades from "../../Services/sqlite/Atividades";
import ContainerAtividades from '../../Recursos/ContainerAtividade/Index';
import { useNavigation, DrawerActions } from '@react-navigation/native';

export default function (){
    const [atividades, setAtividade] = useState(Atividades.all().then(a => reformatAtividades(a)))
    const Navigation = useNavigation()

    const formatData = (data) => {
        let date = new Date(data)
        let dia = date.getDate();
        let mes = date.getMonth() + 1;
        let ano = date.getFullYear();

        if (dia.toString().length === 1){
            dia = '0' + dia
        }
        if (mes.toString().length === 1){
            mes = '0' + mes
        }

        return ano + '-'+ mes + '-' + dia
    }

    function reformatAtividades (atividades2){
        let retorno = {}

        atividades2.forEach(element => {
            let hold = element.data
            let data = formatData(hold)
            if (data in retorno){
                retorno[data].push({'titulo' : element.titulo, 'categoria' : element.categoria, 'descricao' : element.descricao, 'data' : element.data, 'concluida': element.concluida, 'dataConcluida': element.dataConcluida})
            }else{
                retorno[data] = [{'titulo' : element.titulo, 'categoria' : element.categoria, 'descricao' : element.descricao, 'data' : element.data, 'concluida': element.concluida, 'dataConcluida': element.dataConcluida}]
            }
        })
        setAtividade(retorno)
    }

    const renderItem = (item) => {
        return(<ContainerAtividades obj={item}/>)
    }
    
    return(
        <View style={{flex: 1}}>
            <StatusBar backgroundColor='#006EFF'/>
            <BarraSuperior
                conteudo='Calendário'
                valor={false}
                onPress={() => Navigation.dispatch(DrawerActions.openDrawer())}
                />
            <View style={{flex: 1}}>
                <Agenda
                    style={{flex: 1}}
                    items={atividades}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}
