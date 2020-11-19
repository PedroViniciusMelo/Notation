import { StyleSheet } from "react-native";
import normalizador from '../../Recursos/normalizador'

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    containerAtividades: {
        paddingTop: '3%',
        width: '95%',
        height: '78%',
        position: 'relative'
    },
    btn:{
        marginTop: '2%',
        width: '12%',
        height: normalizador.widthPercentageToDP('12%'),
        backgroundColor: 'blue',
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
