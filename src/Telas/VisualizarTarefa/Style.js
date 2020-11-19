import {StyleSheet} from "react-native";
import normalizador from "../../Recursos/normalizador";

export default StyleSheet.create({
    mainView:{
        position: 'relative',
        flex: 1,
        alignItems: 'center'
    },
    secondaryView:{
        margin: '3%',
        padding: '4%',
        height: '60%',
        width: '90%',
        elevation: 20,
        backgroundColor: '#FFF',
        borderRadius: 20
    },
    viewSuperior: {
        flexDirection: 'row', 
        width: '100%', 
        justifyContent: 'space-between', 
        marginBottom: '1%'
    },
    txtTitulo : {
        fontFamily: 'Poppins_600SemiBold', 
        fontSize: normalizador.widthPercentageToDP('7%'), 
        color: 'black'
    },
    categoria : {
        backgroundColor: 'red', 
        width: '40%', 
        height: '10%', 
        borderRadius: 20, 
        padding: '1%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginBottom: '3%'
    },
    txtCategoria: {
        fontFamily: 'Poppins_600SemiBold', 
        fontSize: normalizador.widthPercentageToDP('3%'), 
        color: 'white'
    },
    data: {
        flexDirection: 'row', 
        backgroundColor: 'blue', 
        width: '45%', 
        height: '10%', 
        padding: 5, 
        borderRadius: 20, 
        marginBottom: '3%', 
        justifyContent: 'space-evenly', 
        alignItems: 'center'
    },
    txtData: {
        fontFamily: 'Poppins_600SemiBold', 
        fontSize: normalizador.widthPercentageToDP('2%'), 
        color: 'white'
    },
    descricao: {
        fontFamily: 'Poppins_600SemiBold', 
        fontSize: normalizador.widthPercentageToDP('6%'), 
        color: 'black'
    },
    txtDescricao: {
        width: '100%', 
        height: '42%', 
        borderWidth: 1, 
        borderRadius: 20, 
        padding: 10
    },
    Btn1:{
        justifyContent: 'space-between',
        paddingLeft: '4%',
        paddingRight: '4%',
        margin: '2%',
        height: '7%',
        width: '50%',
        backgroundColor: 'blue',
        borderRadius: 40,
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 5
    },
    Btn2:{
        justifyContent: 'space-between',
        paddingLeft: '4%',
        paddingRight: '4%',
        margin: '2%',
        height: '7%',
        width: '50%',
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
