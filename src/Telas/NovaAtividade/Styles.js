import {StyleSheet} from "react-native";
import normalizador from "../../Recursos/normalizador";


export default StyleSheet.create({
    container : {
        alignItems: 'stretch'
    },
    containerSecundario: {

        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerScrollView: {
        padding: '3%',
        elevation: 10,
        borderRadius: 20,
        backgroundColor: 'white',
        margin: '3%',
        maxHeight: '80%'
    },
    titulos: {
        fontFamily: 'Poppins_700Bold',
        fontSize: normalizador.widthPercentageToDP('4%'),
        color: 'black',
    },
    descricao : {
        fontFamily: 'Poppins_400Regular',
        fontSize : normalizador.widthPercentageToDP('2%')
    },
    textInput: {
        padding: '2%',
        borderWidth: 1,
        borderColor: '#d9d9d9',
        borderRadius: 20
    },
    mulTxtInput : {
        padding: '2%',
        height: normalizador.heightPercentageToDP("23%"),
        borderWidth: 1,
        borderColor: '#d9d9d9',
        borderRadius: 20
    },
    data: {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2%',
        flexDirection: 'row',
        backgroundColor: 'blue',
        width: '50%',
        borderRadius: 20
    },
    textData: {
        fontWeight: 'bold',
        fontSize: normalizador.widthPercentageToDP('3%'),
        color: 'white'
    },
    viewSwitch: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtn: {
        color: '#FFF',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: normalizador.widthPercentageToDP('4%')
    },
    Btn: {
        flexBasis: '7%',
        width: '35%',
        alignSelf: 'center',
        backgroundColor: 'blue',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    notificar: {
        fontSize: normalizador.widthPercentageToDP('3%')
    }
})
