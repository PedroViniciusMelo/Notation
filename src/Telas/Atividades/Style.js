import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'stretch',
    },
    containerSecundario: {
        flex: 1,
        padding: '2%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    flatList: {
        width: '100%'
    },
    btn:{
        elevation: 5,
        bottom: 5,
        position: 'absolute',
        backgroundColor: 'blue',
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
