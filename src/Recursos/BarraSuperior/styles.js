import { StyleSheet } from "react-native";
import normalizador from "../normalizador";

export default StyleSheet.create({
    container:{
        flex: 0,
        flexBasis: '11%',
        padding: '4%',
        justifyContent: 'space-between',
        alignItems : 'center',
        backgroundColor : '#006EFF',
        flexDirection : 'row',
    },
    text: {
        fontFamily: 'Poppins_600SemiBold',
        color: 'white',
        fontSize: normalizador.widthPercentageToDP('5%')
    },
});
