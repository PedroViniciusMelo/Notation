import  {StyleSheet} from "react-native";

export default StyleSheet.create({
    view: {
        flex : 1,
        paddingTop: 20,

    },
    secondaryView:{
        alignItems : 'center',
        flex: 1,
    },
    barra: {
        position: 'absolute',
        left : 20
    },
    text: {
        paddingTop: 10,
        fontWeight: 'bold',
        color: 'black',
        fontSize: 40
    },
    flatlist: {
        alignItems: 'center',
        padding : 15,
    },
    nomes: {
        color: 'black',
        fontSize:  25,
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
        height : 100,
        width : 100,
        backgroundColor : 'black',
        top: 90
    },
    textoQuadrado : {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 20,
        top: 10
    },
    direitos : {
        top : 170,
        color : 'black',
        fontWeight : 'bold',
        fontSize: 25
    }
});
