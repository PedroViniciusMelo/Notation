import {StyleSheet} from "react-native";
import {Dimensions, PixelRatio} from 'react-native';

const widthPercentageToDP = widthPercent => {
    const screenWidth = Dimensions.get('window').width;
    return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) / 100);
};

const heightPercentageToDP = heightPercent => {
    const screenHeight = Dimensions.get('window').height;
    return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent) / 100);
};


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
        width: widthPercentageToDP('40%'),
        height: heightPercentageToDP('30%')
    }
});
