import { StyleSheet } from "react-native";
import normalizador from "../../Recursos/normalizador";

export default StyleSheet.create({
    container: {
        flex : 1,
        alignItems: 'stretch'
    },
    containerSecundario: {
        justifyContent: 'space-between',
        flex: 1,
        padding: '4%',
        alignItems: 'center',
    },
    containerFl: {
        alignItems: 'center',
        maxHeight: '30%'
    },
    text: {
        fontFamily: 'Poppins_700Bold',
        color: 'black',
        fontSize: normalizador.widthPercentageToDP('6%')
    },
    nomes: {
        color: 'black',
        fontSize: normalizador.widthPercentageToDP('4%'),
    },
    quadrado : {
        justifyContent: 'center',
        alignItems: 'center',
        height : normalizador.widthPercentageToDP('20%'),
        width : normalizador.widthPercentageToDP('20%'),
        backgroundColor : 'black',
    },
    textoQuadrado : {
        color : 'white',
        fontWeight : 'bold',
        fontSize : normalizador.widthPercentageToDP('3.5%'),
    },
    direitos : {
        color : 'black',
        fontWeight : 'bold',
        fontSize: normalizador.widthPercentageToDP('4%')
    },
});
