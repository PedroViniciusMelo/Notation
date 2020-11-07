import {StyleSheet} from "react-native";


export default StyleSheet.create({
    descricao : {
        fontFamily: 'Poppins_400Regular',
        fontSize : 15
    },
    data: {
        backgroundColor: 'gold',
        width: '50%',
        height: '8%',
        borderRadius: 10
    },
    textBtn: {
        color: '#FFF',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 25
    },
    Btn: {
        top: 60,
        height: '7%',
        width: '35%',
        backgroundColor: 'blue',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoInput : {
        padding: 9,
        width: '95%',
        height: '40%',
        borderWidth: 1,
        borderColor: '#d9d9d9',
        borderRadius: 20
    },
    secondaryView: {
        height: '70%',
        width: '90%',
        backgroundColor: '#FFF',
        elevation: 20,
        top: 30,
        borderRadius: 20,
        padding: 20
    },
    mainView : {
        flex: 1,
        alignItems: 'center'
    },
    titulos: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 25,
        color: 'black',
    },
    campos: {
        padding: 9,
        width: '95%',
        height: '8%',
        borderWidth: 1,
        borderColor: '#d9d9d9',
        borderRadius: 20
    }
})
