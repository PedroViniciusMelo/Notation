import {StyleSheet} from "react-native";
import normalizador from "../../Recursos/normalizador";

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    containerSecundario: {
        flex: 1, 
        padding: '2%', 
        alignItems: 'center', 
    },
    viewSuperior: {
        flexDirection: 'row', 
        width: '100%', 
        justifyContent: 'space-between', 
        marginBottom: '1%'
    },
    txtTitulo : {
        maxWidth: '80%',
        fontFamily: 'Poppins_600SemiBold', 
        fontSize: normalizador.widthPercentageToDP('7%'), 
        color: 'black'
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
        fontSize: normalizador.widthPercentageToDP('6%'), 
        color: 'black'
    },
    txtDescricao: {
        minHeight: '30%',
        minWidth: '100%',
        height: '42%', 
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
