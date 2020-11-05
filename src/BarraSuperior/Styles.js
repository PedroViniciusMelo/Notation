import  {StyleSheet} from "react-native";

export default StyleSheet.create({
    secondaryView:{
        justifyContent: 'center',
        alignItems : 'center',
        backgroundColor : '#006EFF',
        height: '12%',
        width : '100%',
        flexDirection : 'row',
    },
    barra: {
        position: 'absolute',
        left : 20
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 30
    },
    categorias: {
        position: 'absolute',
        right: 20,
        justifyContent: 'flex-end'
    }
});
