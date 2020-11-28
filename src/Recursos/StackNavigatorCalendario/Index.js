import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import VisualizarAtividade from '../../Telas/VisualizarTarefa/Index'
import Calendario from '../../Telas/Calendário/Index';

const { Navigator, Screen } = createStackNavigator();

export default function StackNavigator(){
    return(
        <Navigator >
            <Screen name='Calendário' component={Calendario} options={{headerShown: false}}/>
            <Screen name='VisualizarAtividade' component={VisualizarAtividade}/>
        </Navigator>
    )
}
