import {LinearGradient} from 'expo-linear-gradient';
import React from 'react';
import Logo from '../Logo';

export default function Index(){
    return(
        <LinearGradient style={{ flex : 1, justifyContent : 'center', alignItems: 'center'}} colors={['#0095FF', '#0048FF']}>
            <Logo/>
        </LinearGradient>
    );
};
