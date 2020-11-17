import {StyleSheet} from "react-native";
import normalizador from "../normalizador";

export default StyleSheet.create({
    container: {
        marginBottom: 5,
        paddingBottom: 5,
        borderWidth: 0.5,
        position: 'relative',
        borderRadius: 20,
        backgroundColor: '#FFF',
    },
    texto: {
        paddingLeft: '3%',
        paddingTop: '1%',
        fontFamily: 'Poppins_700Bold',
        fontSize: normalizador.widthPercentageToDP('4%')
    },
    containerS: {
        flexDirection: 'row',
        paddingLeft: '5%',
        paddingRight: '5%',
        justifyContent: 'space-between',
    },
    categoria: {
        padding: 5,
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
        alignItems: 'center',
        borderRadius:  20,
        flexDirection: 'row',
        width: '30%',
        height: '35%',
    },
    textoData: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: normalizador.widthPercentageToDP('2.5%'),
    }
})
