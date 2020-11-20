import { StyleSheet } from "react-native";
import normalizador from "../../Recursos/normalizador";

export default StyleSheet.create({
    view: {
        flex : 1,
        alignItems: 'center'
    },
    containerSecundario: {
        justifyContent: 'space-between',
        flex: 1, 
        padding: '4%', 
        alignItems: 'center', 
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
    containerFl: {
        alignItems: 'center', 
        maxHeight: '30%'
    }
});
