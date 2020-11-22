import {StyleSheet} from "react-native";
import normalizador from "../../Recursos/normalizador";

export default StyleSheet.create({
    container:{
        alignItems: 'stretch',
    },
    containerSecundario: {

        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    containerFatList:{
        padding: '4%',
        elevation: 10,
        borderRadius: 20,
        backgroundColor: 'white',
        marginHorizontal: '3%',
        maxHeight: '66%'
    },
    contanierTituloAtividade: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    viewSuperior: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: '1%'
    },
    txtTitulo : {
        maxWidth: '80%',

    },
    categoria : {
        backgroundColor: 'red',
        borderRadius: 20,
        padding: '1%',
        maxWidth: '45%',
        alignItems: 'center',
    },
    txtCategoria: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: normalizador.widthPercentageToDP('3%'),
        color: 'white'
    },
    data: {
        marginVertical: '4%',
        flexDirection: 'row',
        backgroundColor: 'blue',
        maxWidth: '45%',
        padding: '1%',
        borderRadius: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    txtData: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: normalizador.widthPercentageToDP('3%'),
        color: 'white'
    },
    descricao: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: normalizador.widthPercentageToDP('5%'),
        color: 'black'
    },
    txtDescricao: {
        height: normalizador.heightPercentageToDP("21%"),
        borderWidth: 1,
        borderRadius: 20,
        padding: 10
    },
    Btn1:{
        justifyContent: 'space-between',
        padding: '4%',
        margin: '2%',
        backgroundColor: 'blue',
        borderRadius: 40,
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 5
    },
    Btn2:{
        justifyContent: 'space-between',
        padding: '4%',
        margin: '2%',
        backgroundColor: 'red',
        borderRadius: 40,
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 5
    },
    txtBtn1:{
        textAlign: 'center',
        fontFamily: 'Poppins_700Bold',
        color: 'white',
        fontSize: normalizador.widthPercentageToDP('3%')
    }
})
