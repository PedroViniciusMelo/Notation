import  {StyleSheet} from "react-native";
import normalizador from "../normalizador";

export default StyleSheet.create({
    secondaryView:{
        padding: 20,
        justifyContent: 'space-between',
        alignItems : 'center',
        backgroundColor : '#006EFF',
        height: '12%',
        width : '100%',
        flexDirection : 'row',
    },
    barra: {
        position: 'relative',
    },
    text: {
        fontFamily: 'Poppins_600SemiBold',
        color: 'white',
        fontSize: normalizador.widthPercentageToDP('5%')
    },
    categorias: {
        position: 'relative'
    }
});
