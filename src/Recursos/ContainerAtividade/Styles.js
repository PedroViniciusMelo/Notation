import { StyleSheet } from "react-native";
import normalizador from "../normalizador";

export default StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flex: 1,
        marginVertical: '1%',
        padding: '2%',
        elevation: 5,
        borderRadius: 20,
        backgroundColor: '#FFF',
    },
    texto: {
        fontFamily: 'Poppins_700Bold',
        fontSize: normalizador.widthPercentageToDP('4%')
    },
    containerS: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    categoria: {
        maxWidth: '50%',
        padding: '1.5%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:  20,
        flexDirection: 'row',
        backgroundColor: 'green'
    },
    textoCategoria: {
        fontSize: normalizador.widthPercentageToDP('2%'),
        fontFamily: 'Poppins_600SemiBold',
        color: '#FFF'
    },
    data: {
        flexDirection: 'row',
    },
    textoData: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: normalizador.widthPercentageToDP('2.5%'),
    },
    textoData2:{
        color: 'red',
        fontFamily: 'Poppins_400Regular',
        fontSize: normalizador.widthPercentageToDP('2.5%'),
    },
    classificacao: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    atrasado: {
        flexDirection: 'row', 
        justifyContent: "center", 
        alignItems: 'center'
    },
    txtAtrasado: {
        fontSize: normalizador.widthPercentageToDP('3%'), 
        marginRight: 10, 
        backgroundColor: 'red', 
        color: 'white', 
        padding: 3, 
        borderRadius: 10
    }
})
