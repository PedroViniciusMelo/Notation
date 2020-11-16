import  {StyleSheet} from "react-native";
import normalizador from "../../Recursos/normalizador";

export default StyleSheet.create({
    view: {
        flex : 1
    },
    secondaryView:{
        position: 'relative',
        padding: '2%',
        alignItems : 'center',
        width: '100%',
        height: '100%'
    },
    text: {
        paddingTop: '1%',
        fontFamily: 'Poppins_700Bold',
        color: 'black',
        fontSize: normalizador.widthPercentageToDP('6%')
    },
    flatlist: {
        alignItems: 'center',
        padding : '3%',
    },
    nomes: {
        color: 'black',
        fontSize: normalizador.widthPercentageToDP('4%'),
    },
    flatListSize: {
        height : '23%',
        width : '40%'
    },
    flatLista: {
        backgroundColor: '#f5f5f5',
        borderRadius: 30
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
        top: '10%',
        color : 'black',
        fontWeight : 'bold',
        fontSize: normalizador.widthPercentageToDP('4%')
    }
});
