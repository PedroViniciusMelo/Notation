import { StyleSheet } from "react-native";
import normalizador from "../normalizador";

export default StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: '1.5%',
        padding: '2%',
        borderWidth: 0.5,
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
    }
})
