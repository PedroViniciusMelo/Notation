import { StyleSheet } from "react-native";
import normalizador from '../normalizador'


export default StyleSheet.create({
    container: {
        flex: 1,
        elevation: 15,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '50%',
        maxWidth: '50%',
        minHeight: '14%',
        maxHeight: '14%',
        backgroundColor: 'white',
        borderRadius: 20
    },
    tamanhoLogo: {
        width: normalizador.widthPercentageToDP('40%'),
        height: normalizador.heightPercentageToDP('20%')
    }
});
