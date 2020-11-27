import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NovaAtividade from '../../Telas/NovaAtividade/Index';
import Atividades from '../../Telas/Atividades/Index';
import VisualizarAtividade from '../../Telas/VisualizarTarefa/Index'
import Calendario from '../../Telas/Calendário/Index';

const { Navigator, Screen } = createStackNavigator();

export default function StackNavigator(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name='Atividades' component={Atividades}/>
            <Screen name='CriarNovaAtividade' component={NovaAtividade}/>
            <Screen name='VisualizarAtividade' component={VisualizarAtividade}/>
            <Screen name='Calendário' component={Calendario}/>
        </Navigator>
    )
}
