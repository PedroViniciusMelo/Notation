import {StyleSheet} from "react-native";

export default StyleSheet.create({
    mainView:{
        flex: 1,
        alignItems: 'center'
    },
    secondaryView:{
        top: 40,
        height: '55%',
        width: '90%',
        elevation: 20,
        backgroundColor: '#FFF',
        borderRadius: 20
    },
    Btn1:{
        height: '7%',
        width: '50%',
        backgroundColor: 'blue',
        top: 90,
        borderRadius: 40,
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 5
    },
    Btn2:{
        height: '7%',
        width: '50%',
        backgroundColor: 'red',
        top: 110,
        borderRadius: 40,
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 5
    },
    txtBtn1:{
        left : 25,
        fontFamily: 'Poppins_700Bold',
        color: 'white',
        fontSize: 18
    },
    txtBtn2:{
        left : 60,
        fontFamily: 'Poppins_700Bold',
        color: 'white',
        fontSize: 18
    }
})
