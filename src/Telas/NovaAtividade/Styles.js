import {StyleSheet} from "react-native";
import normalizador from "../../Recursos/normalizador";


export default StyleSheet.create({
    descricao : {
        fontFamily: 'Poppins_400Regular',
        fontSize : normalizador('width', '2%')
    },
    data: {
        padding: 10,
        flexDirection: 'row',
        position: 'relative',
        backgroundColor: 'gold',
        width: '50%',
        height: '8%',
        borderRadius: 20
    },
    textBtn: {
        color: '#FFF',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: normalizador('width', '4%')
    },
    Btn: {
        top: '7%',
        height: '7%',
        width: '35%',
        backgroundColor: 'blue',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoInput : {
        padding: 10,
        width: '95%',
        height: '33%',
        borderWidth: 1,
        borderColor: '#d9d9d9',
        borderRadius: 20
    },
    secondaryView: {
        height: '70%',
        width: '90%',
        backgroundColor: '#FFF',
        elevation: 20,
        top: '2%',
        borderRadius: 20,
        padding: '4%'
    },
    mainView : {
        flex: 1,
        alignItems: 'center'
    },
    titulos: {
        fontFamily: 'Poppins_700Bold',
        fontSize: normalizador('width', '4%'),
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
        fontSize: normalizador('width', '3%')
    }
})
