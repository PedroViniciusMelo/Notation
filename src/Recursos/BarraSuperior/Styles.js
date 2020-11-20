import { StyleSheet } from "react-native";
import normalizador from "../normalizador";

export default StyleSheet.create({
    container:{
        flex: 1,
        padding: '4%',
        justifyContent: 'space-between',
        alignItems : 'center',
        backgroundColor : '#006EFF',
        minHeight: '13%',
        maxHeight: '13%',
        maxWidth: '100%',
        minWidth: '100%',
        flexDirection : 'row',
    },
    text: {
        fontFamily: 'Poppins_600SemiBold',
        color: 'white',
        fontSize: normalizador.widthPercentageToDP('5%')
    },
});
