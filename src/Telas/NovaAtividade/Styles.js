import {StyleSheet} from "react-native";
import normalizador from "../../Recursos/normalizador";


export default StyleSheet.create({
    textoData: {
        fontWeight: 'bold',
        fontSize: normalizador.widthPercentageToDP('3%'),
        color: 'white'
    },
    descricao : {
        fontFamily: 'Poppins_400Regular',
        fontSize : normalizador.widthPercentageToDP('2%')
    },
    data: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: '3%',
        flexDirection: 'row',
        position: 'relative',
        backgroundColor: 'blue',
        width: '60%',
        height: '8%',
        borderRadius: 20
    },
    textBtn: {
        color: '#FFF',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: normalizador.widthPercentageToDP('4%')
    },
    Btn: {
        minHeight: '7%',
        minWidth: '35%',
        backgroundColor: 'blue',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoInput : {
        padding: '3%',
        width: '95%',
        height: '30%',
        borderWidth: 1,
        borderColor: '#d9d9d9',
        borderRadius: 20
    },
    secondaryView: {
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: '#FFF',
        elevation: 20,
        borderRadius: 20,
        padding: '4%'
    },
    mainView : {
        flex: 1,
        alignItems: 'center'
    },
    titulos: {
        fontFamily: 'Poppins_700Bold',
        fontSize: normalizador.widthPercentageToDP('4%'),
        color: 'black',
    },
    campos: {
        width: '95%',
        height: '8%',
        borderWidth: 1,
        borderColor: '#d9d9d9',
        borderRadius: 20
    },
    viewSwitch: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    notificar: {
        fontSize: normalizador.widthPercentageToDP('3%')
    }
})
