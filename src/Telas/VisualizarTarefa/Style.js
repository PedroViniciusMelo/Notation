import {StyleSheet} from "react-native";
import normalizador from "../../Recursos/normalizador";

export default StyleSheet.create({
    mainView:{
        position: 'relative',
        flex: 1,
        alignItems: 'center'
    },
    secondaryView:{
        top: '2%',
        height: '60%',
        width: '90%',
        elevation: 20,
        backgroundColor: '#FFF',
        borderRadius: 20
    },
    Btn1:{
        top: '10%',
        height: '7%',
        width: '50%',
        backgroundColor: 'blue',
        borderRadius: 40,
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 5
    },
    Btn2:{
        top: '11%',
        height: '7%',
        width: '50%',
        backgroundColor: 'red',
        borderRadius: 40,
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 5
    },
    txtBtn1:{
        left : 13,
        fontFamily: 'Poppins_700Bold',
        color: 'white',
        fontSize: normalizador.widthPercentageToDP('3%')
    },
    txtBtn2:{
        left : 13,
        fontFamily: 'Poppins_700Bold',
        color: 'white',
        fontSize: normalizador.widthPercentageToDP('3%')
    }
})
