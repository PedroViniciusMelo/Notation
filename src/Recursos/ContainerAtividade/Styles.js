import {StyleSheet} from "react-native";
import normalizador from "../normalizador";

export default StyleSheet.create({
    view1: {
        height: '60%',
        width: '100%'
    },
    container: {
        position: 'relative',
        flex: 0,
        width: '100%',
        height: '100%',
        elevation: 20,
        borderRadius: 20,
        backgroundColor: '#FFF',
    },
    texto: {
        paddingLeft: '3%',
        paddingTop: '1%',
        fontFamily: 'Poppins_700Bold',
        fontSize: normalizador('width','5%')
    },
    containerS: {
        flexDirection: 'row',
        paddingLeft: '5%',
        paddingRight: '5%',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
    },
    categoria: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:  20,
        flexDirection: 'row',
        width: '30%',
        height: '30%',
        backgroundColor: 'green'
    },
    textoCategoria: {
        fontSize: normalizador('width','2.5%'),
        fontFamily: 'Poppins_700Bold',
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
        fontFamily: 'Poppins_700Bold',
        fontSize: normalizador('width','3%'),
    }
})
