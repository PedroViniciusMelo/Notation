import {StyleSheet} from "react-native";
import normalizador from '../normalizador'


export default StyleSheet.create({
    container: {
        flex: 0,
        elevation: 15,
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: '13%',
        backgroundColor: 'white',
        borderRadius: 20
    },
    tamanhoLogo: {
        width: normalizador('width','40%'),
        height: normalizador('height','30%')
    }
});
