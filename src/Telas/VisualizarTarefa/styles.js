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
        paddingHorizontal: '4%',
        paddingVertical: '0.5%',
        elevation: 10,
        borderRadius: 20,
        backgroundColor: 'white',
        marginHorizontal: '3%',
        maxHeight: '66%'
    },
    titulo: {
        color: 'black', 
        marginBottom: 20, 
        maxWidth: '80%', 
        minHeight: 50,
        fontSize: normalizador.widthPercentageToDP('6%'), 
        fontFamily: 'Poppins_700Bold'
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
        //height: normalizador.heightPercentageToDP("21%"),
        minHeight: 50,
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        marginBottom: 10
    },
    Btn1:{
        justifyContent: 'space-around',
        padding: '4%',
        margin: '2%',
        backgroundColor: 'blue',
        borderRadius: 40,
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 5
    },
    Btn2:{
        justifyContent: 'space-evenly',
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
    },
    btn3: {
        justifyContent: 'space-around',
        padding: '4%',
        margin: '2%',
        //backgroundColor: '#0015a1',
        backgroundColor: '#034b52',
        borderRadius: 40,
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 5
    }
})
